# Shaapit Matka

A dark, mystical backend system for the Shaapit Matka application - a cursed ritual tracking platform with social integration.

## Features

- **User Authentication & Management**
  - JWT-based authentication
  - User profiles with dark levels
  - Password management
  - Account deactivation

- **Ritual System**
  - 7-step cursed ritual progression
  - Step-by-step tracking
  - Completion statistics
  - Leaderboards

- **Artifact Collection**
  - Cursed artifacts with AR support
  - Collection management
  - Usage tracking
  - Location-based discovery

- **Social Features**
  - Activity feed
  - Likes and comments
  - Trending activities
  - Public shame rituals

- **WhatsApp Integration**
  - Automated messages
  - Ritual reminders
  - Curse alerts
  - Achievement notifications

- **Real-time Features**
  - Live activity updates
  - WebSocket support (ready for implementation)

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Upload**: Multer, Cloudinary
- **SMS/WhatsApp**: Twilio
- **Security**: Helmet, Rate Limiting
- **Validation**: Mongoose validation

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update environment variables in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/shaapitmatka
   JWT_SECRET=your_jwt_secret_here
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_WHATSAPP_NUMBER=+14155238886
   ```

5. Start the server:
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/password` - Change password
- `DELETE /api/auth/deactivate` - Deactivate account

### Rituals
- `GET /api/rituals` - Get all ritual steps
- `GET /api/rituals/:id` - Get single ritual step
- `GET /api/rituals/progress` - Get user progress
- `PUT /api/rituals/progress/:stepNumber` - Update progress
- `GET /api/rituals/stats` - Get ritual statistics
- `GET /api/rituals/leaderboard` - Get completion leaderboard

### Artifacts
- `GET /api/artifacts` - Get all artifacts
- `GET /api/artifacts/:id` - Get single artifact
- `GET /api/artifacts/my-collection` - Get user's collection
- `POST /api/artifacts/:id/collect` - Add to collection
- `DELETE /api/artifacts/:id/collect` - Remove from collection
- `POST /api/artifacts/:id/use` - Use artifact
- `GET /api/artifacts/nearby` - Get nearby artifacts (AR)
- `GET /api/artifacts/leaderboard` - Get artifact leaderboard

### Activities
- `GET /api/activities` - Get all activities
- `GET /api/activities/my-activities` - Get user's activities
- `GET /api/activities/feed` - Get activity feed
- `GET /api/activities/trending` - Get trending activities
- `POST /api/activities` - Create activity
- `PUT /api/activities/:id/like` - Like/unlike activity
- `POST /api/activities/:id/comment` - Comment on activity
- `DELETE /api/activities/:id` - Delete activity

## Database Models

### User
- Authentication credentials
- Ritual progress tracking
- Artifact collection
- Social media connections
- Achievements and notifications

### Ritual
- 7-step ritual structure
- Requirements and rewards
- Social integration settings
- AR content support

### Artifact
- Cursed objects with properties
- Location-based discovery
- AR model support
- Usage statistics

### Activity
- User actions and events
- Social interactions
- Public/private visibility
- Engagement metrics

## WhatsApp Integration

The system includes comprehensive WhatsApp integration:

1. **Incoming Messages**: Handle user interactions via WhatsApp
2. **Ritual Reminders**: Automated step-by-step guidance
3. **Curse Alerts**: Periodic dark messages
4. **Achievement Notifications**: Celebrate milestones
5. **Social Features**: Share progress and referrals

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Rate limiting
- Input validation
- CORS protection
- Helmet security headers

## Development

### Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests (when implemented)

### Environment Variables
See `.env.example` for all required environment variables.

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

This project is part of the Shaapit Matka application and follows its licensing terms.
