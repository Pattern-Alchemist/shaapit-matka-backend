// API Client for Shaapit Matka Frontend Integration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  removeToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(userData) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    if (response.token) this.setToken(response.token);
    return response;
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    if (response.token) this.setToken(response.token);
    return response;
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  async updateProfile(profileData) {
    return this.request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Ritual endpoints
  async getRitualSteps() {
    return this.request('/rituals');
  }

  async getUserProgress() {
    return this.request('/rituals/progress');
  }

  async updateRitualProgress(stepNumber, data) {
    return this.request(`/rituals/progress/${stepNumber}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async getRitualStats() {
    return this.request('/rituals/stats');
  }

  async getLeaderboard() {
    return this.request('/rituals/leaderboard');
  }

  // Artifact endpoints
  async getArtifacts(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/artifacts?${query}`);
  }

  async getArtifact(id) {
    return this.request(`/artifacts/${id}`);
  }

  async getMyCollection() {
    return this.request('/artifacts/my-collection');
  }

  async collectArtifact(artifactId) {
    return this.request(`/artifacts/${artifactId}/collect`, {
      method: 'POST',
    });
  }

  async useArtifact(artifactId, data = {}) {
    return this.request(`/artifacts/${artifactId}/use`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getNearbyArtifacts(lat, lng, radius = 1000) {
    return this.request(`/artifacts/nearby?lat=${lat}&lng=${lng}&radius=${radius}`);
  }

  // Activity endpoints
  async getActivities(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/activities?${query}`);
  }

  async getMyActivities(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/activities/my-activities?${query}`);
  }

  async getActivityFeed(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/activities/feed?${query}`);
  }

  async getTrendingActivities(limit = 10) {
    return this.request(`/activities/trending?limit=${limit}`);
  }

  async likeActivity(activityId) {
    return this.request(`/activities/${activityId}/like`, {
      method: 'PUT',
    });
  }

  async commentOnActivity(activityId, text) {
    return this.request(`/activities/${activityId}/comment`, {
      method: 'POST',
      body: JSON.stringify({ text }),
    });
  }

  async createActivity(activityData) {
    return this.request('/activities', {
      method: 'POST',
      body: JSON.stringify(activityData),
    });
  }
}

export default new ApiClient();
