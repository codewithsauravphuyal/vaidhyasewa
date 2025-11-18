# Backend Requirements Document
## Vaidhya Sewa - Hospital Management System Website

**Project:** Vaidhya Sewa Marketing Website  
**Frontend Framework:** Next.js 16 (React 19)  
**Backend Framework:** Django (to be implemented)  
**Document Version:** 1.0  
**Date:** 2024

---

## Table of Contents

1. [Overview](#overview)
2. [Authentication & User Management](#authentication--user-management)
3. [Content Management APIs](#content-management-apis)
4. [Form Submission APIs](#form-submission-apis)
5. [Django Models](#django-models)
6. [API Endpoints Summary](#api-endpoints-summary)
7. [Technical Requirements](#technical-requirements)
8. [Data Structures & Schemas](#data-structures--schemas)

---

## Overview

This document outlines all backend requirements for the Vaidhya Sewa marketing website. The frontend is built with Next.js and requires a Django REST API backend to handle:

- User authentication and authorization
- Content management (blog, testimonials, case studies, etc.)
- Form submissions (contact, signup)
- Dynamic data serving for all pages

**Base URL:** `https://api.vaidhyasewa.com/api/v1/` (or as configured)

---

## 1. Authentication & User Management

### 1.1 User Account Signup

**Endpoint:** `POST /api/v1/auth/signup/`

**Description:** Creates a new user account for accessing the Vaidhya Sewa system. This is for actual user authentication, not hospital registration.

**Request Body:**
```json
{
  "name": "string (required, min 2, max 100)",
  "email": "string (required, valid email, must be unique)",
  "password": "string (required, min 8 characters)"
}
```

**Note:** Password confirmation and terms agreement are handled on the frontend. Only the password (not confirmPassword) is sent to the backend.

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Account created successfully. Please check your email to verify your account.",
  "email_verification_required": true,
  "verification_email_sent": true
}
```

**Error Response (400):**
```json
{
  "error": "Validation error",
  "details": {
    "email": ["A user with this email already exists."],
    "password": ["Password must be at least 8 characters long."]
  }
}
```

**Error Response (400) - Email already exists:**
```json
{
  "error": "Email already registered",
  "message": "An account with this email already exists. Please log in instead."
}
```

### 1.2 Email Verification

**Endpoint:** `POST /api/v1/auth/verify-email/`

**Description:** Verifies user email address using verification token sent via email.

**Request Body:**
```json
{
  "token": "string (required, verification token from email)"
}
```

**Response (200 OK):**
```json
{
  "message": "Email verified successfully",
  "user": {
    "id": 1,
    "email": "john@example.com",
    "name": "John Doe",
    "email_verified": true
  }
}
```

**Error Response (400):**
```json
{
  "error": "Invalid or expired token"
}
```

### 1.3 Resend Verification Email

**Endpoint:** `POST /api/v1/auth/resend-verification/`

**Request Body:**
```json
{
  "email": "string (required, valid email)"
}
```

**Response (200 OK):**
```json
{
  "message": "Verification email sent successfully"
}
```

### 1.4 User Login

**Endpoint:** `POST /api/v1/auth/login/`

**Request Body:**
```json
{
  "email": "string (required)",
  "password": "string (required)",
  "remember_me": "boolean (optional, default: false)"
}
```

**Response (200 OK):**
```json
{
  "access": "jwt_access_token",
  "refresh": "jwt_refresh_token",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name",
    "role": "admin",
    "hospital": {
      "id": 1,
      "name": "City Hospital"
    }
  }
}
```

**Error Response (401):**
```json
{
  "error": "Invalid credentials"
}
```

### 1.5 Google OAuth Login / Signup

**Endpoint:** `POST /api/v1/auth/google/`

**Request Body:**
```json
{
  "access_token": "string (required, Google OAuth access token)"
}
```

**Response (200 OK):**
```json
{
  "access": "jwt_access_token",
  "refresh": "jwt_refresh_token",
  "user": {
    "id": 1,
    "email": "user@gmail.com",
    "name": "User Name",
    "role": "user"
  },
  "is_new_user": false
}
```

### 1.6 Google OAuth Signup

**Endpoint:** `POST /api/v1/auth/google/signup/`

**Description:** Creates a new user account using Google OAuth. If user already exists, returns login tokens.

**Request Body:**
```json
{
  "access_token": "string (required, Google OAuth access token)"
}
```

**Response (201 Created) - New User:**
```json
{
  "access": "jwt_access_token",
  "refresh": "jwt_refresh_token",
  "user": {
    "id": 1,
    "email": "user@gmail.com",
    "name": "User Name",
    "role": "user",
    "email_verified": true
  },
  "is_new_user": true
}
```

**Response (200 OK) - Existing User:**
```json
{
  "access": "jwt_access_token",
  "refresh": "jwt_refresh_token",
  "user": {
    "id": 1,
    "email": "user@gmail.com",
    "name": "User Name",
    "role": "user"
  },
  "is_new_user": false
}
```

### 1.7 Password Reset Request

**Endpoint:** `POST /api/v1/auth/password/reset/`

**Request Body:**
```json
{
  "email": "string (required)"
}
```

**Response (200 OK):**
```json
{
  "message": "Password reset email sent"
}
```

### 1.8 Password Reset Confirm

**Endpoint:** `POST /api/v1/auth/password/reset/confirm/`

**Request Body:**
```json
{
  "token": "string (required)",
  "new_password": "string (required, min 8)"
}
```

**Response (200 OK):**
```json
{
  "message": "Password reset successful"
}
```

### 1.9 Refresh Token

**Endpoint:** `POST /api/v1/auth/token/refresh/`

**Request Body:**
```json
{
  "refresh": "string (required)"
}
```

**Response (200 OK):**
```json
{
  "access": "new_jwt_access_token"
}
```

### 1.10 Hospital Registration / Lead Form

**Endpoint:** `POST /api/v1/auth/register/` or `POST /api/v1/registration/hospital/`

**Description:** This endpoint is for hospital registration/lead generation (from /getstarted page). This is NOT for user account creation, but for collecting hospital information for follow-up.

**Request Body:**
```json
{
  "name": "string (required, min 2, max 100)",
  "email": "string (required, valid email)",
  "phone": "string (required, min 10, max 20)",
  "address": "string (required)",
  "businessName": "string (required, min 2, max 100)",
  "employeeSize": "string (required, choices: 1-10, 11-25, 26-50, 51-100, 101-200, 201-500, 500+)",
  "remark": "string (optional, max 1000)",
  "howYouKnow": "string (required, choices: google, social-media, referral, advertisement, event, website, other)"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+977 9812345678",
  "businessName": "City Hospital",
  "status": "pending",
  "created_at": "2024-01-15T10:30:00Z",
  "message": "Registration successful. We'll contact you soon."
}
```

**Error Response (400):**
```json
{
  "error": "Validation error",
  "details": {
    "email": ["This field is required."],
    "phone": ["Invalid phone number format."]
  }
}
```

---

## 2. Content Management APIs

### 2.1 Blog Posts

#### 2.1.1 List Blog Posts

**Endpoint:** `GET /api/v1/blog/posts/`

**Query Parameters:**
- `category` (optional): Filter by category
- `search` (optional): Search in title and excerpt
- `page` (optional): Page number (default: 1)
- `page_size` (optional): Items per page (default: 10, max: 100)

**Response (200 OK):**
```json
{
  "count": 50,
  "next": "https://api.vaidhyasewa.com/api/v1/blog/posts/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Blog Post Title",
      "slug": "blog-post-title",
      "excerpt": "Short description of the blog post",
      "content": "Full blog post content (HTML)",
      "category": {
        "id": 1,
        "name": "Healthcare Technology",
        "slug": "healthcare-technology"
      },
      "author": {
        "id": 1,
        "name": "Author Name",
        "email": "author@example.com"
      },
      "image": "https://api.vaidhyasewa.com/media/blog/image.jpg",
      "published_at": "2024-01-15T10:30:00Z",
      "created_at": "2024-01-10T08:00:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "views": 1250,
      "tags": ["hospital", "management", "technology"]
    }
  ]
}
```

#### 2.1.2 Get Single Blog Post

**Endpoint:** `GET /api/v1/blog/posts/{id}/` or `GET /api/v1/blog/posts/{slug}/`

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Blog Post Title",
  "slug": "blog-post-title",
  "excerpt": "Short description",
  "content": "Full HTML content",
  "category": {
    "id": 1,
    "name": "Healthcare Technology",
    "slug": "healthcare-technology"
  },
  "author": {
    "id": 1,
    "name": "Author Name",
    "email": "author@example.com",
    "avatar": "https://api.vaidhyasewa.com/media/avatars/author.jpg"
  },
  "image": "https://api.vaidhyasewa.com/media/blog/image.jpg",
  "published_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-10T08:00:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "views": 1250,
  "tags": ["hospital", "management", "technology"],
  "related_posts": [
    {
      "id": 2,
      "title": "Related Post",
      "slug": "related-post",
      "excerpt": "Related post excerpt",
      "image": "https://api.vaidhyasewa.com/media/blog/related.jpg"
    }
  ]
}
```

#### 2.1.3 Blog Categories

**Endpoint:** `GET /api/v1/blog/categories/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "All",
    "slug": "all",
    "post_count": 50
  },
  {
    "id": 2,
    "name": "Healthcare Technology",
    "slug": "healthcare-technology",
    "post_count": 25
  },
  {
    "id": 3,
    "name": "Hospital Management",
    "slug": "hospital-management",
    "post_count": 15
  }
]
```

### 2.2 Testimonials

#### 2.2.1 List Testimonials

**Endpoint:** `GET /api/v1/testimonials/`

**Query Parameters:**
- `featured` (optional, boolean): Get only featured testimonials
- `limit` (optional): Limit results (default: 10)

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Dr. Sarah Johnson",
    "role": "Hospital Administrator",
    "hospital": "City General Hospital",
    "image": "https://api.vaidhyasewa.com/media/testimonials/img_ellipse70.png",
    "text": "Vaidhya Sewa has transformed our hospital operations...",
    "rating": 5,
    "featured": true,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

### 2.3 Case Studies

#### 2.3.1 List Case Studies

**Endpoint:** `GET /api/v1/case-studies/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "hospital": "Makalu Everest Hospital",
    "location": "Biratnagar",
    "type": "Multi-specialty Hospital",
    "problem": "Manual patient records and slow billing process",
    "solution": "Implemented Vaidhya Sewa with full OPD/IPD and billing integration",
    "results": [
      {
        "metric": "80%",
        "description": "Reduction in billing time"
      },
      {
        "metric": "95%",
        "description": "Patient satisfaction increase"
      },
      {
        "metric": "50%",
        "description": "Administrative cost reduction"
      }
    ],
    "testimonial": "Vaidhya Sewa has transformed our hospital operations...",
    "author": "Dr. Ramesh Kumar",
    "position": "Hospital Administrator",
    "image": "https://api.vaidhyasewa.com/media/case-studies/hospital.jpg",
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

### 2.4 Partners

#### 2.4.1 List Partners

**Endpoint:** `GET /api/v1/partners/`

**Query Parameters:**
- `category` (optional): Filter by category (pharmacy, lab, technology)

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "MediCare Pharmacy",
    "type": "Chain Pharmacy",
    "location": "Kathmandu",
    "category": "pharmacy",
    "logo": "https://api.vaidhyasewa.com/media/partners/medicare.png",
    "website": "https://medicare.com",
    "description": "Integrated pharmacy for seamless prescription fulfillment"
  }
]
```

#### 2.4.2 Partner Categories

**Endpoint:** `GET /api/v1/partners/categories/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Pharmacy Partners",
    "slug": "pharmacy",
    "description": "Integrated pharmacies for seamless prescription fulfillment",
    "partner_count": 5
  },
  {
    "id": 2,
    "title": "Lab Partners",
    "slug": "lab",
    "description": "Diagnostic centers integrated with our lab module",
    "partner_count": 3
  }
]
```

### 2.5 FAQ

#### 2.5.1 List FAQs

**Endpoint:** `GET /api/v1/faq/`

**Query Parameters:**
- `category` (optional): Filter by category name

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "category": {
      "id": 1,
      "name": "General",
      "slug": "general"
    },
    "question": "What is Vaidhya Sewa?",
    "answer": "Vaidhya Sewa is a comprehensive hospital management system...",
    "order": 1,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

#### 2.5.2 FAQ Categories

**Endpoint:** `GET /api/v1/faq/categories/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "General",
    "slug": "general",
    "faq_count": 4
  },
  {
    "id": 2,
    "name": "Billing & Pricing",
    "slug": "billing-pricing",
    "faq_count": 5
  }
]
```

### 2.6 Features

#### 2.6.1 List Features

**Endpoint:** `GET /api/v1/features/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Appointment Management",
    "description": "Efficient appointment scheduling and management system...",
    "details": [
      "Online appointment booking",
      "Doctor availability management",
      "Appointment reminders",
      "Reschedule and cancellation"
    ],
    "icon": "Calendar",
    "color": "teal_700",
    "order": 1,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

### 2.7 Pricing Plans

#### 2.7.1 List Pricing Plans

**Endpoint:** `GET /api/v1/pricing/plans/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Starter",
    "slug": "starter",
    "price": "Rs. 14,999",
    "period": "Per Year",
    "limit": "Up to 150 patients/day",
    "color": "teal_400",
    "highlighted": false,
    "features": [
      {
        "id": 1,
        "name": "Patient Record Management",
        "included": true
      },
      {
        "id": 2,
        "name": "Appointment Scheduling",
        "included": true
      }
    ],
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

#### 2.7.2 All Available Features

**Endpoint:** `GET /api/v1/pricing/features/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Patient Record Management",
    "description": "Complete patient records management"
  },
  {
    "id": 2,
    "name": "Appointment Scheduling",
    "description": "Online appointment booking system"
  }
]
```

### 2.8 Screenshots

#### 2.8.1 List Screenshots

**Endpoint:** `GET /api/v1/screenshots/`

**Query Parameters:**
- `category` (optional): Filter by category

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Main Dashboard",
    "category": {
      "id": 1,
      "name": "Dashboard",
      "slug": "dashboard"
    },
    "description": "Overview of all hospital operations",
    "image": "https://api.vaidhyasewa.com/media/screenshots/dashboard.jpg",
    "thumbnail": "https://api.vaidhyasewa.com/media/screenshots/dashboard_thumb.jpg",
    "order": 1,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

#### 2.8.2 Screenshot Categories

**Endpoint:** `GET /api/v1/screenshots/categories/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "All",
    "slug": "all",
    "screenshot_count": 20
  },
  {
    "id": 2,
    "name": "Dashboard",
    "slug": "dashboard",
    "screenshot_count": 4
  }
]
```

### 2.9 Demo Accounts

#### 2.9.1 List Demo Accounts

**Endpoint:** `GET /api/v1/demo/accounts/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "role": "Super Admin",
    "email": "admin",
    "description": "Full system access and configuration",
    "official_url": "https://login.makalueveresthospital.com.np/auth/login",
    "active": true
  },
  {
    "id": 2,
    "role": "Doctor",
    "email": "doctor@demo.vaidhyasewa.com",
    "description": "Patient care and prescription management",
    "official_url": "https://app.vaidhyasewa.com",
    "active": true
  }
]
```

**Note:** Passwords should NOT be returned in API responses. These are for display purposes only.

---

## 3. Form Submission APIs

### 3.1 Contact Form Submission

**Endpoint:** `POST /api/v1/contact/`

**Request Body:**
```json
{
  "name": "string (required, min 2, max 100)",
  "hospitalName": "string (required, min 2, max 100)",
  "email": "string (required, valid email)",
  "phone": "string (required, min 10, max 20)",
  "message": "string (required, min 10, max 1000)",
  "preferredContact": "string (required, choices: email, phone, either)"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "John Doe",
  "hospitalName": "City Hospital",
  "email": "john@example.com",
  "phone": "+977 9812345678",
  "message": "I would like to know more about...",
  "preferredContact": "email",
  "status": "pending",
  "created_at": "2024-01-15T10:30:00Z",
  "message": "Your message has been sent successfully. We will contact you soon!"
}
```

**Error Response (400):**
```json
{
  "error": "Validation error",
  "details": {
    "email": ["Invalid email address."],
    "message": ["Message must be at least 10 characters."]
  }
}
```

### 3.2 Newsletter Subscription

**Endpoint:** `POST /api/v1/newsletter/subscribe/`

**Request Body:**
```json
{
  "email": "string (required, valid email)"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "email": "subscriber@example.com",
  "subscribed_at": "2024-01-15T10:30:00Z",
  "message": "Successfully subscribed to newsletter"
}
```

**Error Response (400):**
```json
{
  "error": "Email already subscribed"
}
```

### 3.3 Demo Booking Request

**Endpoint:** `POST /api/v1/demo/booking/`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "hospitalName": "string (required)",
  "preferredDate": "string (optional, ISO 8601 date)",
  "preferredTime": "string (optional, HH:MM format)",
  "message": "string (optional, max 500)"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+977 9812345678",
  "hospitalName": "City Hospital",
  "status": "pending",
  "created_at": "2024-01-15T10:30:00Z",
  "message": "Demo booking request received. We'll contact you to confirm the schedule."
}
```

---

## 4. Django Models

### 4.1 User & Authentication Models

```python
# models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """Extended User model"""
    ROLE_CHOICES = [
        ('super_admin', 'Super Admin'),
        ('admin', 'Admin'),
        ('doctor', 'Doctor'),
        ('pharmacist', 'Pharmacist'),
        ('lab_technician', 'Lab Technician'),
        ('receptionist', 'Receptionist'),
        ('user', 'User'),
    ]
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')
    phone = models.CharField(max_length=20, blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    hospital = models.ForeignKey('Hospital', on_delete=models.SET_NULL, null=True, blank=True)
    email_verified = models.BooleanField(default=False)
    email_verification_token = models.CharField(max_length=100, blank=True, null=True)
    email_verification_sent_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Hospital(models.Model):
    """Hospital/Clinic information"""
    name = models.CharField(max_length=200)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    employee_size = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
```

### 4.2 Content Models

```python
# Blog Models
class BlogCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "Blog Categories"
    
    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.TextField()
    content = models.TextField()  # HTML content
    category = models.ForeignKey(BlogCategory, on_delete=models.SET_NULL, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    image = models.ImageField(upload_to='blog/', blank=True, null=True)
    published_at = models.DateTimeField(null=True, blank=True)
    views = models.IntegerField(default=0)
    tags = models.CharField(max_length=500, blank=True)  # Comma-separated or use ManyToMany
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-published_at', '-created_at']
    
    def __str__(self):
        return self.title

# Testimonial Model
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    hospital = models.CharField(max_length=200)
    image = models.ImageField(upload_to='testimonials/')
    text = models.TextField()
    rating = models.IntegerField(default=5, choices=[(i, i) for i in range(1, 6)])
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', '-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.hospital}"

# Case Study Model
class CaseStudy(models.Model):
    hospital = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
    problem = models.TextField()
    solution = models.TextField()
    testimonial = models.TextField()
    author = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    image = models.ImageField(upload_to='case-studies/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.hospital

class CaseStudyResult(models.Model):
    case_study = models.ForeignKey(CaseStudy, on_delete=models.CASCADE, related_name='results')
    metric = models.CharField(max_length=50)  # e.g., "80%"
    description = models.CharField(max_length=200)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']

# Partner Model
class PartnerCategory(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "Partner Categories"
    
    def __str__(self):
        return self.title

class Partner(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    category = models.ForeignKey(PartnerCategory, on_delete=models.SET_NULL, null=True)
    logo = models.ImageField(upload_to='partners/', blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

# FAQ Model
class FAQCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "FAQ Categories"
    
    def __str__(self):
        return self.name

class FAQ(models.Model):
    category = models.ForeignKey(FAQCategory, on_delete=models.CASCADE, related_name='faqs')
    question = models.CharField(max_length=500)
    answer = models.TextField()
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['category', 'order']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
    
    def __str__(self):
        return self.question

# Feature Model
class Feature(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    details = models.JSONField(default=list)  # List of detail strings
    icon = models.CharField(max_length=50)  # Icon name (e.g., "Calendar")
    color = models.CharField(max_length=20, default="teal_700")
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.title

# Pricing Models
class PricingFeature(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class PricingPlan(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    price = models.CharField(max_length=50)  # e.g., "Rs. 14,999"
    period = models.CharField(max_length=50)  # e.g., "Per Year"
    limit = models.CharField(max_length=100)  # e.g., "Up to 150 patients/day"
    color = models.CharField(max_length=20, default="teal_400")
    highlighted = models.BooleanField(default=False)
    features = models.ManyToManyField(PricingFeature, through='PlanFeature')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

class PlanFeature(models.Model):
    plan = models.ForeignKey(PricingPlan, on_delete=models.CASCADE)
    feature = models.ForeignKey(PricingFeature, on_delete=models.CASCADE)
    included = models.BooleanField(default=True)
    
    class Meta:
        unique_together = ['plan', 'feature']

# Screenshot Models
class ScreenshotCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "Screenshot Categories"
    
    def __str__(self):
        return self.name

class Screenshot(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(ScreenshotCategory, on_delete=models.SET_NULL, null=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='screenshots/')
    thumbnail = models.ImageField(upload_to='screenshots/thumbnails/', blank=True, null=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['category', 'order']
    
    def __str__(self):
        return self.title

# Demo Account Model
class DemoAccount(models.Model):
    role = models.CharField(max_length=100)
    email = models.CharField(max_length=200)  # Can be email or username
    description = models.TextField()
    official_url = models.URLField()
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.role} - {self.email}"
```

### 4.3 Form Submission Models

```python
# Contact Form Model
class ContactSubmission(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('resolved', 'Resolved'),
        ('closed', 'Closed'),
    ]
    
    PREFERRED_CONTACT_CHOICES = [
        ('email', 'Email'),
        ('phone', 'Phone'),
        ('either', 'Either is fine'),
    ]
    
    name = models.CharField(max_length=100)
    hospital_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    preferred_contact = models.CharField(max_length=20, choices=PREFERRED_CONTACT_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.hospital_name}"

# Newsletter Subscription Model
class NewsletterSubscription(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    unsubscribed_at = models.DateTimeField(null=True, blank=True)
    active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.email

# Demo Booking Model
class DemoBooking(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    hospital_name = models.CharField(max_length=200)
    preferred_date = models.DateField(null=True, blank=True)
    preferred_time = models.TimeField(null=True, blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.hospital_name}"

# Site Settings Model
class SiteSettings(models.Model):
    """Site-wide settings and contact information"""
    emails = models.JSONField(default=list)  # List of email addresses
    phones = models.JSONField(default=list)  # List of phone numbers
    address = models.TextField()
    office_hours = models.JSONField(default=list)  # List of office hour strings
    social_links = models.JSONField(default=dict)  # Dict of social media links
    whatsapp = models.URLField(blank=True, null=True)
    messenger = models.URLField(blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Site Settings"
    
    def __str__(self):
        return "Site Settings"

# Homepage Content Models
class GetStartedStep(models.Model):
    number = models.CharField(max_length=10)  # e.g., "01"
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.CharField(max_length=200)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.title

class HowItWorks(models.Model):
    title = models.CharField(max_length=200)
    icon = models.CharField(max_length=50)  # Icon name
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "How It Works"
    
    def __str__(self):
        return self.title

class HomepageBenefit(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50)  # Icon name
    color = models.CharField(max_length=20, default="teal_700")
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.title

class WhyChooseUs(models.Model):
    description = models.TextField()
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "Why Choose Us Items"
    
    def __str__(self):
        return self.description[:50]

class SiteStatistics(models.Model):
    hospitals_count = models.IntegerField(default=0)
    daily_users = models.IntegerField(default=0)
    uptime_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=99.9)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Site Statistics"
    
    def __str__(self):
        return f"Stats: {self.hospitals_count} hospitals, {self.daily_users} users"

# About Page Models
class CompanyValue(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.title

class AboutPageFeature(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.title

class AboutPageWhyChoose(models.Model):
    description = models.TextField()
    icon = models.CharField(max_length=50)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "About Page Why Choose Items"
    
    def __str__(self):
        return self.description[:50]

# Signup Registration Model
class SignupRegistration(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('contacted', 'Contacted'),
        ('trial_started', 'Trial Started'),
        ('converted', 'Converted'),
        ('rejected', 'Rejected'),
    ]
    
    EMPLOYEE_SIZE_CHOICES = [
        ('1-10', '1-10 employees'),
        ('11-25', '11-25 employees'),
        ('26-50', '26-50 employees'),
        ('51-100', '51-100 employees'),
        ('101-200', '101-200 employees'),
        ('201-500', '201-500 employees'),
        ('500+', '500+ employees'),
    ]
    
    HOW_YOU_KNOW_CHOICES = [
        ('google', 'Google Search'),
        ('social-media', 'Social Media'),
        ('referral', 'Referral/Friend'),
        ('advertisement', 'Advertisement'),
        ('event', 'Event/Conference'),
        ('website', 'Website'),
        ('other', 'Other'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    business_name = models.CharField(max_length=200)
    employee_size = models.CharField(max_length=50, choices=EMPLOYEE_SIZE_CHOICES)
    remark = models.TextField(blank=True)
    how_you_know = models.CharField(max_length=50, choices=HOW_YOU_KNOW_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.business_name}"
```

---

## 5. API Endpoints Summary

### Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/auth/signup/` | Create user account | No |
| POST | `/api/v1/auth/verify-email/` | Verify email address | No |
| POST | `/api/v1/auth/resend-verification/` | Resend verification email | No |
| POST | `/api/v1/auth/login/` | User login | No |
| POST | `/api/v1/auth/google/` | Google OAuth login | No |
| POST | `/api/v1/auth/google/signup/` | Google OAuth signup | No |
| POST | `/api/v1/auth/register/` | Hospital registration/lead form | No |
| POST | `/api/v1/auth/password/reset/` | Request password reset | No |
| POST | `/api/v1/auth/password/reset/confirm/` | Confirm password reset | No |
| POST | `/api/v1/auth/token/refresh/` | Refresh access token | No |
| POST | `/api/v1/auth/logout/` | User logout | Yes |

### Content Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/v1/blog/posts/` | List blog posts | No |
| GET | `/api/v1/blog/posts/{id}/` | Get single blog post | No |
| GET | `/api/v1/blog/categories/` | List blog categories | No |
| GET | `/api/v1/testimonials/` | List testimonials | No |
| GET | `/api/v1/case-studies/` | List case studies | No |
| GET | `/api/v1/partners/` | List partners | No |
| GET | `/api/v1/partners/categories/` | List partner categories | No |
| GET | `/api/v1/faq/` | List FAQs | No |
| GET | `/api/v1/faq/categories/` | List FAQ categories | No |
| GET | `/api/v1/features/` | List features | No |
| GET | `/api/v1/pricing/plans/` | List pricing plans | No |
| GET | `/api/v1/pricing/features/` | List all pricing features | No |
| GET | `/api/v1/screenshots/` | List screenshots | No |
| GET | `/api/v1/screenshots/categories/` | List screenshot categories | No |
| GET | `/api/v1/demo/accounts/` | List demo accounts | No |
| GET | `/api/v1/settings/contact/` | Get contact information | No |
| GET | `/api/v1/settings/maintenance/` | Get maintenance mode status | No |
| GET | `/api/v1/homepage/steps/` | Get started steps | No |
| GET | `/api/v1/homepage/how-it-works/` | How it works items | No |
| GET | `/api/v1/homepage/benefits/` | Homepage benefits | No |
| GET | `/api/v1/homepage/why-choose-us/` | Why choose us items | No |
| GET | `/api/v1/homepage/stats/` | Site statistics | No |
| GET | `/api/v1/about/values/` | Company values | No |
| GET | `/api/v1/about/features/` | About page features | No |
| GET | `/api/v1/about/why-choose/` | About page why choose | No |

### Form Submission Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/contact/` | Submit contact form | No |
| POST | `/api/v1/newsletter/subscribe/` | Subscribe to newsletter | No |
| POST | `/api/v1/demo/booking/` | Book a demo | No |

### Admin Endpoints (Protected)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/v1/admin/contact-submissions/` | List contact submissions | Yes (Admin) |
| GET | `/api/v1/admin/signup-registrations/` | List signup registrations | Yes (Admin) |
| GET | `/api/v1/admin/demo-bookings/` | List demo bookings | Yes (Admin) |
| PUT | `/api/v1/admin/contact-submissions/{id}/` | Update contact submission status | Yes (Admin) |

---

## 6. Technical Requirements

### 6.1 Authentication & Security

1. **JWT Authentication**
   - Use `djangorestframework-simplejwt` for JWT tokens
   - Access token expiry: 15 minutes
   - Refresh token expiry: 7 days
   - Token blacklisting for logout

2. **CORS Configuration**
   - Allow frontend domain: `https://vaidhyasewa.com` (production)
   - Allow localhost for development: `http://localhost:3000`
   - Configure in `settings.py`:
   ```python
   CORS_ALLOWED_ORIGINS = [
       "https://vaidhyasewa.com",
       "http://localhost:3000",
   ]
   CORS_ALLOW_CREDENTIALS = True
   ```

3. **Password Security**
   - Minimum 8 characters
   - Use Django's built-in password validators
   - Hash passwords using PBKDF2

4. **Rate Limiting**
   - Use `django-ratelimit` or `django-rest-framework-throttling`
   - Contact form: 5 submissions per hour per IP
   - Login attempts: 5 attempts per 15 minutes per IP
   - API endpoints: 100 requests per minute per user

### 6.2 Media & File Handling

1. **File Storage**
   - Use `django-storages` with AWS S3 or similar for production
   - Local file storage for development
   - Image optimization for uploads

2. **Image Fields**
   - Max file size: 5MB per image
   - Allowed formats: JPG, PNG, WebP
   - Auto-generate thumbnails for screenshots

3. **Media URLs**
   - Base URL: `https://api.vaidhyasewa.com/media/`
   - Serve via CDN in production

### 6.3 Pagination

- Use Django REST Framework pagination
- Default page size: 10 items
- Maximum page size: 100 items
- Include `count`, `next`, `previous` in paginated responses

### 6.4 Error Handling

**Standard Error Response Format:**
```json
{
  "error": "Error type",
  "message": "Human-readable error message",
  "details": {
    "field_name": ["Error message for this field"]
  }
}
```

**HTTP Status Codes:**
- `200 OK` - Successful GET request
- `201 Created` - Successful POST request (resource created)
- `400 Bad Request` - Validation error
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

### 6.5 Database

- **Primary Database:** PostgreSQL (recommended) or MySQL
- **Migrations:** Use Django migrations
- **Indexing:** Add indexes on frequently queried fields (email, slug, created_at)

### 6.6 Email Configuration

1. **Email Backend**
   - Use SMTP for production (Gmail, SendGrid, or AWS SES)
   - Console backend for development

2. **Email Templates**
   - Contact form submission confirmation
   - Password reset email
   - Newsletter subscription confirmation
   - Demo booking confirmation

### 6.7 API Documentation

- Use `drf-yasg` or `drf-spectacular` for Swagger/OpenAPI documentation
- Accessible at `/api/docs/` or `/api/swagger/`

---

## 7. Data Structures & Schemas

### 7.1 Common Field Types

| Field Type | Django Field | Validation | Example |
|------------|--------------|------------|---------|
| Email | EmailField | Valid email format | `user@example.com` |
| Phone | CharField(20) | Min 10, max 20 chars | `+977 9812345678` |
| Slug | SlugField | URL-friendly string | `blog-post-title` |
| Image | ImageField | JPG, PNG, WebP, max 5MB | Upload file |
| Text | TextField | No limit | Long text content |
| JSON | JSONField | Valid JSON | `{"key": "value"}` |

### 7.2 Date/Time Fields

- All models should include `created_at` and `updated_at` timestamps
- Use `auto_now_add=True` for `created_at`
- Use `auto_now=True` for `updated_at`
- Return in ISO 8601 format: `2024-01-15T10:30:00Z`

### 7.3 Serializer Naming Convention

- User serializer: `UserSerializer`
- Blog post serializer: `BlogPostSerializer`
- Contact submission serializer: `ContactSubmissionSerializer`
- Follow pattern: `{ModelName}Serializer`

### 7.4 ViewSet Naming Convention

- User viewset: `UserViewSet`
- Blog post viewset: `BlogPostViewSet`
- Contact viewset: `ContactSubmissionViewSet`
- Follow pattern: `{ModelName}ViewSet`

---

## 8. Additional Notes

### 8.1 Admin Panel

- Register all models in Django admin
- Add search and filter functionality
- Customize admin interface for better UX

### 8.2 Testing

- Write unit tests for all models
- Write API tests for all endpoints
- Test authentication and authorization
- Test form validations

### 8.3 Environment Variables

Required environment variables:
```env
SECRET_KEY=your-secret-key
DEBUG=False
DATABASE_URL=postgresql://user:password@localhost/dbname
ALLOWED_HOSTS=api.vaidhyasewa.com,localhost
CORS_ALLOWED_ORIGINS=https://vaidhyasewa.com,http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-password
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_STORAGE_BUCKET_NAME=your-bucket-name
```

### 8.4 Deployment Considerations

1. **Production Settings**
   - Set `DEBUG=False`
   - Use secure SSL certificates
   - Enable HTTPS only
   - Configure proper CORS
   - Set up logging

2. **Performance**
   - Use database connection pooling
   - Enable caching (Redis recommended)
   - Optimize database queries
   - Use CDN for media files

3. **Monitoring**
   - Set up error tracking (Sentry recommended)
   - Monitor API performance
   - Track user activity

### 8.5 Future Enhancements

Consider implementing:
- Blog post search with full-text search
- Analytics tracking for blog views
- Email notifications for admin on form submissions
- Webhook support for integrations
- API versioning strategy
- GraphQL endpoint (optional)

---

## 8. Additional Content APIs

### 8.1 Site Settings / Contact Information

**Endpoint:** `GET /api/v1/settings/contact/`

**Response (200 OK):**
```json
{
  "emails": [
    "info@vaidhyasewa.com",
    "support@vaidhyasewa.com",
    "hamroyouthit@gmail.com"
  ],
  "phones": [
    "+977 9746888890",
    "+977 9741776222"
  ],
  "address": "Itahari-06 Pragati Marga, Sunsari, Koshi Province, Nepal",
  "office_hours": [
    "Sunday - Friday: 10:00 AM - 6:00 PM",
    "Saturday: 10:00 AM - 4:00 PM"
  ],
  "social_links": {
    "facebook": "https://facebook.com/vaidhyasewa",
    "instagram": "https://instagram.com/vaidhyasewa",
    "twitter": "https://twitter.com/vaidhyasewa",
    "tiktok": "https://tiktok.com/@vaidhyasewa"
  },
  "whatsapp": "https://wa.me/977981234567",
  "messenger": "https://m.me/vaidhyasewa"
}
```

### 8.2 Homepage Content

#### 8.2.1 Get Started Steps

**Endpoint:** `GET /api/v1/homepage/steps/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "number": "01",
    "title": "Sign Up",
    "description": "Create your account and get started with Vaidhya Sewa in minutes.",
    "link": "/signup",
    "order": 1
  },
  {
    "id": 2,
    "number": "02",
    "title": "Choose Pricing",
    "description": "Select the perfect plan that fits your hospital's needs and budget.",
    "link": "/pricing",
    "order": 2
  },
  {
    "id": 3,
    "number": "03",
    "title": "Fill Form & Go Live",
    "description": "Complete your hospital details and start managing operations efficiently.",
    "link": "/signup",
    "order": 3
  }
]
```

#### 8.2.2 How It Works

**Endpoint:** `GET /api/v1/homepage/how-it-works/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Patient Registration",
    "icon": "Users",
    "order": 1
  },
  {
    "id": 2,
    "title": "Appointment Booking",
    "icon": "Calendar",
    "order": 2
  },
  {
    "id": 3,
    "title": "Consultation & Diagnosis",
    "icon": "UserCheck",
    "order": 3
  },
  {
    "id": 4,
    "title": "Lab Tests & Radiology",
    "icon": "FlaskConical",
    "order": 4
  },
  {
    "id": 5,
    "title": "Pharmacy & Billing",
    "icon": "Pill",
    "order": 5
  },
  {
    "id": 6,
    "title": "Reports & Analytics",
    "icon": "BarChart3",
    "order": 6
  }
]
```

#### 8.2.3 Benefits

**Endpoint:** `GET /api/v1/homepage/benefits/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "80% Faster Operations",
    "description": "Automate routine tasks and reduce manual work significantly.",
    "icon": "Zap",
    "color": "teal_700",
    "order": 1
  },
  {
    "id": 2,
    "title": "100% Secure",
    "description": "Enterprise-grade security with HIPAA compliance and data encryption.",
    "icon": "Shield",
    "color": "teal_400",
    "order": 2
  },
  {
    "id": 3,
    "title": "Real-time Analytics",
    "description": "Make data-driven decisions with comprehensive reports and insights.",
    "icon": "BarChart3",
    "color": "teal_700",
    "order": 3
  },
  {
    "id": 4,
    "title": "24/7 Support",
    "description": "Round-the-clock customer support to help you whenever you need.",
    "icon": "Clock",
    "color": "teal_400",
    "order": 4
  }
]
```

#### 8.2.4 Why Choose Us (Homepage)

**Endpoint:** `GET /api/v1/homepage/why-choose-us/`

**Response (200 OK):**
```json
[
  "Trusted by 500+ hospitals across Nepal",
  "99.9% uptime guarantee",
  "Enterprise-grade security",
  "24/7 customer support",
  "Affordable pricing for all sizes",
  "Regular feature updates",
  "Easy data migration",
  "Mobile responsive included"
]
```

#### 8.2.5 Statistics

**Endpoint:** `GET /api/v1/homepage/stats/`

**Response (200 OK):**
```json
{
  "hospitals_count": 500,
  "daily_users": 50000,
  "uptime_percentage": 99.9,
  "updated_at": "2024-01-15T10:30:00Z"
}
```

### 8.3 About Page Content

#### 8.3.1 Company Values

**Endpoint:** `GET /api/v1/about/values/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Unified Operations",
    "description": "A centralized platform that integrates all hospital functions—from appointments to detailed reporting—for complete operational oversight",
    "order": 1
  },
  {
    "id": 2,
    "title": "Paperless Efficiency",
    "description": "Digital workflows that eliminate paperwork, providing secure access to patient medical histories, lab results, radiology reports, and more",
    "order": 2
  },
  {
    "id": 3,
    "title": "Reliable Scalability",
    "description": "Robust performance and security designed for hospitals of any size, with seamless pharmacy integration and real-time stock management",
    "order": 3
  },
  {
    "id": 4,
    "title": "Care-Centered Design",
    "description": "Intuitive tools for reception, doctors, and administrators to streamline tasks and prioritize patient care",
    "order": 4
  }
]
```

#### 8.3.2 About Page Features

**Endpoint:** `GET /api/v1/about/features/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Complete Patient Management",
    "description": "Securely store and access detailed medical histories, patient lists, and care records in a centralized digital system for improved outcomes.",
    "icon": "User",
    "order": 1
  },
  {
    "id": 2,
    "title": "Efficient Appointments & Reception",
    "description": "Streamlined scheduling, automated notifications, and user-friendly reception features to minimize wait times and enhance patient flow.",
    "icon": "Calendar",
    "order": 2
  }
]
```

#### 8.3.3 About Page Why Choose

**Endpoint:** `GET /api/v1/about/why-choose/`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "description": "Full-spectrum control: Reception, appointments, doctors, patients, billing, pharmacy, labs, radiology, finance, and stock in one system",
    "icon": "Users",
    "order": 1
  },
  {
    "id": 2,
    "description": "100% paperless: Digitize histories, reports, and workflows for eco-friendly, error-free operations",
    "icon": "Leaf",
    "order": 2
  }
]
```

### 8.4 Maintenance Mode / Announcements

**Endpoint:** `GET /api/v1/settings/maintenance/`

**Response (200 OK):**
```json
{
  "enabled": false,
  "title": "Under Maintenance",
  "message": "Sorry for the inconvenience, we're currently performing maintenance. We'll be back shortly!",
  "sub_message": "For more info, contact Youth IT or Vaidhya Sewa for demo and to get started.",
  "show_contact_info": true,
  "updated_at": "2024-01-15T10:30:00Z"
}
```

---

## 9. Implementation Priority

### Phase 1 (Critical - Week 1-2)
1. User authentication (signup, login, email verification, password reset)
2. Google OAuth (login and signup)
3. Contact form submission
4. Hospital registration/lead form (from /getstarted page)
5. Newsletter subscription
6. Site settings / Contact information API

### Phase 2 (High Priority - Week 3-4)
1. Blog posts API
2. Testimonials API
3. FAQ API
4. Features API
5. Homepage content APIs (steps, benefits, how-it-works, stats)
6. About page content APIs (values, features, why-choose)

### Phase 3 (Medium Priority - Week 5-6)
1. Case studies API
2. Partners API
3. Pricing plans API
4. Screenshots API

### Phase 4 (Low Priority - Week 7+)
1. Demo accounts API
2. Maintenance mode API
3. Admin panel enhancements
4. Analytics integration
5. Performance optimization

---

## 10. Contact & Support

For questions or clarifications about this document, contact:
- **Frontend Developer:** [Your Contact]
- **Project Manager:** [PM Contact]
- **Backend Developer:** [Backend Dev Contact]

---

**Document End**

