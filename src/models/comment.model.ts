export class Comment {
    _id: string;
    content:  String
    startDate: Date
    user: String
    upvotesArray: [String]
    downvotesArray: [String]
    comment: Comment[]
}