# Admin Dashboard Guide

## Overview
The admin dashboard is a comprehensive content management system (CMS) built into the Vaidhya Sewa application. It provides full CRUD (Create, Read, Update, Delete) functionality for managing content, users, and system settings.

## Features

### 1. Dashboard
- **Overview Statistics**: View total content, published items, drafts, and user count
- **Quick Start Links**: Easy access to main admin functions
- **Real-time Stats**: Dashboard updates with current system metrics

### 2. Content Management
- **Create Content**: Add new content with title, description, category, author, and status
- **Edit Content**: Modify existing content items
- **Delete Content**: Remove content from the system
- **Search & Filter**: Find content by title or description
- **Status Management**: Set content status (Draft, Published, Archived)
- **Image Support**: Add image URLs to content items

### 3. User Management
- **View Users**: See all admin users and their roles
- **User Roles**: Admin, Moderator, Viewer
- **User Actions**: Edit and delete user accounts (expandable)

### 4. Settings
- **General Settings**: Configure site name, description, and contact email
- **Feature Settings**: Enable/disable maintenance mode and comments
- **Display Settings**: Adjust pagination and display options

## File Structure

```
src/
├── app/
│   └── admin/
│       ├── layout.tsx           # Admin layout with sidebar
│       ├── page.tsx             # Dashboard page
│       ├── content/
│       │   └── page.tsx         # Content management page
│       ├── users/
│       │   └── page.tsx         # User management page
│       └── settings/
│           └── page.tsx         # Settings page
├── api/
│   └── admin/
│       └── content/
│           ├── route.ts         # GET/POST for content list
│           └── [id]/route.ts    # GET/PUT/DELETE for single content
├── components/
│   └── admin/
│       ├── sidebar.tsx          # Navigation sidebar
│       ├── content-table.tsx    # Content list table
│       ├── content-form.tsx     # Content form modal
│       └── index.ts             # Component exports
└── lib/
    └── models/
        └── admin.ts             # MongoDB schemas
```

## API Endpoints

### Content Management

#### GET /api/admin/content
Fetch all content with optional filters
```bash
curl "http://localhost:3000/api/admin/content?category=Blog&status=published"
```

**Query Parameters:**
- `category` (optional): Filter by category
- `status` (optional): Filter by status (draft, published, archived)

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Sample Content",
    "description": "Content description",
    "category": "Blog",
    "status": "published",
    "author": "John Doe",
    "image": "https://example.com/image.jpg",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
]
```

#### POST /api/admin/content
Create new content
```bash
curl -X POST "http://localhost:3000/api/admin/content" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Content",
    "description": "Description here",
    "category": "Blog",
    "status": "draft",
    "author": "John Doe",
    "image": "https://example.com/image.jpg"
  }'
```

#### GET /api/admin/content/[id]
Fetch single content item
```bash
curl "http://localhost:3000/api/admin/content/507f1f77bcf86cd799439011"
```

#### PUT /api/admin/content/[id]
Update content item
```bash
curl -X PUT "http://localhost:3000/api/admin/content/507f1f77bcf86cd799439011" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "status": "published"
  }'
```

#### DELETE /api/admin/content/[id]
Delete content item
```bash
curl -X DELETE "http://localhost:3000/api/admin/content/507f1f77bcf86cd799439011"
```

## Database Models

### AdminUser Schema
```typescript
{
  email: string (unique, required)
  name: string (required)
  role: 'admin' | 'moderator' | 'viewer' (default: 'viewer')
  createdAt: Date
  updatedAt: Date
}
```

### Content Schema
```typescript
{
  title: string (required)
  description: string (required)
  category: string (required)
  status: 'draft' | 'published' | 'archived' (default: 'draft')
  author: string (required)
  image?: string
  createdAt: Date
  updatedAt: Date
}
```

## Usage Guide

### Accessing the Admin Dashboard
1. Navigate to `http://localhost:3000/admin`
2. You'll see the dashboard with statistics and quick links
3. Use the sidebar to navigate between sections

### Creating Content
1. Go to **Content Management** section
2. Click **Create Content** button
3. Fill in the form fields:
   - **Title**: Content title
   - **Description**: Detailed description
   - **Category**: Content category (e.g., Blog, News)
   - **Author**: Author name
   - **Status**: Draft, Published, or Archived
   - **Image URL**: Optional image URL
4. Click **Save Content**

### Editing Content
1. Go to **Content Management**
2. Find the content in the table
3. Click the **Edit** icon (pencil)
4. Modify the fields as needed
5. Click **Save Content**

### Deleting Content
1. Go to **Content Management**
2. Find the content in the table
3. Click the **Delete** icon (trash)
4. Confirm deletion in the dialog

### Searching & Filtering
1. Use the **Search** box to find content by title or description
2. Use the **Status** dropdown to filter by status
3. Results update in real-time

### Managing Settings
1. Go to **Settings**
2. Modify the desired settings:
   - General settings (site name, description, email)
   - Feature toggles (maintenance mode, comments)
   - Display options (items per page)
3. Click **Save Settings**

## Environment Variables

Ensure these variables are set in your `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
DATABASE_URL=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

## Security Considerations

1. **Authentication**: Admin dashboard requires NextAuth authentication
2. **Authorization**: Implement role-based access control (RBAC) for different user roles
3. **Input Validation**: All inputs are validated on the server side
4. **CORS**: API endpoints follow Next.js security best practices

## Future Enhancements

- [ ] Advanced user role management
- [ ] Bulk content operations
- [ ] Content scheduling
- [ ] Analytics dashboard
- [ ] Audit logs
- [ ] Content versioning
- [ ] Media library management
- [ ] Advanced search with filters
- [ ] Export/Import functionality
- [ ] API key management

## Troubleshooting

### Content not loading
- Check MongoDB connection string in `.env.local`
- Verify database is running and accessible
- Check browser console for errors

### Form submission fails
- Ensure all required fields are filled
- Check network tab in browser DevTools
- Verify API endpoint is accessible

### Sidebar not showing
- Clear browser cache
- Check if admin layout is properly imported
- Verify CSS is loading correctly

## Support

For issues or questions, please refer to the main README.md or contact the development team.
