export interface Message {
  id: number;
  senderId: number;
  senderUsername: number;
  senderPhotoUrl: number;
  recipientId: number;
  recipientUsername: string;
  recipientPhotoUrl: string;
  content: string;
  dateRead?: Date;
  messageSent: Date;
}
