export interface Categories {
    category_id: number;
    name: string;
    creation_date: string;
}

export interface Comments {
    commentId: number,
    postId: number,
    userId: number,
    comment: string,
    CommentCreationDate: string,
    isConfirmed: boolean
}

export interface Posts {
    postId: number
    userId: number
    categoryId: number
    title: string
    content: string
    viewCount: number
    creationDate: string
    isPublished: boolean
}

export interface Users {
    userId: number
    username: string
    email: string
    creationDate: string
    isActive: boolean
}


