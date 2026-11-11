export type UserRole = 'CUSTOMER' | 'PROVIDER' | 'ADMIN';

export type BookingStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'DECLINED'
  | 'CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'DISPUTED';

export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'REVERSED';

export interface UserProfile {
  id: string;
  role: UserRole;
  fullName: string;
  email: string;
  phoneNumber: string; // Kenyan format (e.g. 254712345678)
  avatarUrl: string;
  county: string;
  town: string;
  isVerified: boolean;
  isSuspended: boolean;
  createdAt: string;
}

export interface ProviderProfile extends UserProfile {
  bio: string;
  experienceYears: number;
  hourlyRate: number;
  ratingAverage: number;
  ratingCount: number;
  completedJobsCount: number;
  isAvailable: boolean;
  isPromoted: boolean;
  idNumberVerified: boolean;
  skills: string[];
  portfolio: PortfolioItem[];
  servicesOffered: ProviderService[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  completedDate?: string;
}

export interface ProviderService {
  id: string;
  providerId: string;
  categoryId: string;
  categorySlug: string;
  title: string;
  description: string;
  basePrice: number;
  priceUnit: string; // 'per job' | 'per hour' | 'per room' | 'per session'
  isActive: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  count: number;
  isActive: boolean;
}

export interface Booking {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerAvatar?: string;
  providerId: string;
  providerName: string;
  providerPhone: string;
  providerAvatar?: string;
  serviceId: string;
  serviceTitle: string;
  categorySlug: string;
  status: BookingStatus;
  agreedPrice: number; // in KES
  platformFee: number; // e.g. 5%
  providerProceeds: number; // 95%
  scheduledDate: string;
  scheduledTime: string;
  locationCounty: string;
  locationTown: string;
  customerNotes?: string;
  completionNotes?: string;
  cancelledReason?: string;
  mpesaReceiptNumber?: string;
  paidAt?: string;
  completedAt?: string;
  createdAt: string;
  reviewed?: boolean;
}

export interface Message {
  id: string;
  bookingId: string;
  senderId: string;
  senderName: string;
  content: string;
  attachmentUrl?: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  bookingId: string;
  participantIds: string[];
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount: number;
}

export interface Review {
  id: string;
  bookingId: string;
  customerId: string;
  customerName: string;
  customerAvatar: string;
  providerId: string;
  rating: number; // 1 to 5
  comment: string;
  providerReply?: string;
  createdAt: string;
}

export interface LedgerEntry {
  id: string;
  bookingId: string;
  entryType: 'CUSTOMER_PAYMENT' | 'PLATFORM_COMMISSION' | 'PROVIDER_PAYOUT' | 'REFUND';
  debitAccount: string;
  creditAccount: string;
  amount: number;
  currency: string;
  reference: string;
  timestamp: string;
}

export interface NotificationItem {
  id: string;
  userId: string;
  title: string;
  body: string;
  type: 'BOOKING' | 'PAYMENT' | 'MESSAGE' | 'DISPUTE' | 'SYSTEM';
  isRead: boolean;
  createdAt: string;
  linkAction?: string;
}

export interface CountyLocation {
  name: string;
  towns: string[];
}
