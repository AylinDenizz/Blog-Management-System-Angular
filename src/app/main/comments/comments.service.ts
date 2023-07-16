import { Injectable } from '@angular/core';
import { CreateService } from 'src/app/create/create.service';
import { Comments } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'})
  
export class CommentsService {
  
  private commentsList: Comments[] = [
      {
        commentId: 1,
        postId: 2,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "25.03.2021",
        isConfirmed: false
      },
      {
        commentId: 2,
        postId: 11,
        userId: 1,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "22.05.2017",
        isConfirmed: false
      },
      {
        commentId: 3,
        postId: 13,
        userId: 1,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "10.02.2020",
        isConfirmed: true
      },
      {
        commentId: 4,
        postId: 15,
        userId: 1,
        comment: "Well-written and informative!",
        commentCreationDate: "13.02.2021",
        isConfirmed: true
      },
      {
        commentId:5,
        postId: 26,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "26.12.2017",
        isConfirmed: true
      },
      {
        commentId: 6,
        postId: 28,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "26.02.2023",
        isConfirmed: false
      },
      {
        commentId: 7,
        postId: 28,
        userId: 1,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "10.04.2023",
        isConfirmed: true
      },
      {
        commentId: 8,
        postId: 29,
        userId: 1,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "17.01.2023",
        isConfirmed: true
      },
      {
        commentId: 9,
        postId: 30,
        userId: 1,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "2.08.2017",
        isConfirmed: false
      },
      {
        commentId: 10,
        postId: 33,
        userId: 1,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "2.03.2021",
        isConfirmed: true
      },
      {
        commentId: 11,
        postId: 34,
        userId: 1,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "16.08.2017",
        isConfirmed: true
      },
      {
        commentId: 12,
        postId: 37,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "23.08.2015",
        isConfirmed: true
      },
      {
        commentId: 13,
        postId: 39,
        userId: 1,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "9.10.2021",
        isConfirmed: true
      },
      {
        commentId: 14,
        postId: 51,
        userId: 1,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "2.08.2016",
        isConfirmed: false
      },
      {
        commentId: 15,
        postId: 39,
        userId: 11,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "21.12.2022",
        isConfirmed: false
      },
      {
        commentId: 16,
        postId: 45,
        userId: 11,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.06.2017",
        isConfirmed: true
      },
      {
        commentId: 17,
        postId: 48,
        userId: 11,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "1.10.2018",
        isConfirmed: false
      },
      {
        commentId: 18,
        postId: 55,
        userId: 11,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "13.04.2019",
        isConfirmed: true
      },
      {
        commentId: 19,
        postId: 11,
        userId: 12,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "19.05.2018",
        isConfirmed: true
      },
      {
        commentId: 20,
        postId: 13,
        userId: 12,
        comment: "This article has been really helpful.",
        commentCreationDate: "16.03.2018",
        isConfirmed: true
      },
      {
        commentId: 21,
        postId: 14,
        userId: 12,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.08.2016",
        isConfirmed: true
      },
      {
        commentId: 22,
        postId: 14,
        userId: 12,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "9.04.2016",
        isConfirmed: true
      },
      {
        commentId: 23,
        postId: 20,
        userId: 12,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "18.12.2022",
        isConfirmed: false
      },
      {
        commentId: 24,
        postId: 24,
        userId: 12,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "24.05.2017",
        isConfirmed: false
      },
      {
        commentId: 25,
        postId: 25,
        userId: 12,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "23.02.2019",
        isConfirmed: false
      },
      {
        commentId: 26,
        postId: 26,
        userId: 12,
        comment: "Well-written and informative!",
        commentCreationDate: "14.12.2021",
        isConfirmed: false
      },
      {
        commentId: 27,
        postId: 30,
        userId: 12,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "16.02.2020",
        isConfirmed: false
      },
      {
        commentId: 28,
        postId: 34,
        userId: 12,
        comment: "This article has been really helpful.",
        commentCreationDate: "24.06.2021",
        isConfirmed: false
      },
      {
        commentId: 29,
        postId: 35,
        userId: 12,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "5.07.2022",
        isConfirmed: true
      },
      {
        commentId: 30,
        postId: 36,
        userId: 12,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "19.03.2023",
        isConfirmed: false
      },
      {
        commentId: 31,
        postId: 46,
        userId: 12,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "10.08.2022",
        isConfirmed: true
      },
      {
        commentId: 32,
        postId: 52,
        userId: 12,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "11.01.2020",
        isConfirmed: true
      },
      {
        commentId: 33,
        postId: 2,
        userId: 13,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "8.02.2017",
        isConfirmed: true
      },
      {
        commentId: 34,
        postId: 11,
        userId: 13,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "9.09.2021",
        isConfirmed: true
      },
      {
        commentId: 35,
        postId: 13,
        userId: 13,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "12.09.2019",
        isConfirmed: false
      },
      {
        commentId: 36,
        postId: 16,
        userId: 13,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "12.10.2017",
        isConfirmed: false
      },
      {
        commentId: 37,
        postId: 23,
        userId: 13,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "23.08.2022",
        isConfirmed: false
      },
      {
        commentId: 38,
        postId: 33,
        userId: 13,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "20.12.2017",
        isConfirmed: true
      },
      {
        commentId: 39,
        postId: 37,
        userId: 13,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "11.09.2015",
        isConfirmed: true
      },
      {
        commentId: 40,
        postId: 44,
        userId: 13,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "15.09.2019",
        isConfirmed: false
      },
      {
        commentId: 41,
        postId: 45,
        userId: 13,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "15.03.2016",
        isConfirmed: true
      },
      {
        commentId: 42,
        postId: 45,
        userId: 13,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "10.03.2016",
        isConfirmed: false
      },
      {
        commentId: 43,
        postId: 48,
        userId: 13,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "6.04.2018",
        isConfirmed: false
      },
      {
        commentId: 44,
        postId: 51,
        userId: 13,
        comment: "This article has been really helpful.",
        commentCreationDate: "10.07.2016",
        isConfirmed: true
      },
      {
        commentId: 45,
        postId: 52,
        userId: 13,
        comment: "This article has been really helpful.",
        commentCreationDate: "3.08.2015",
        isConfirmed: false
      },
      {
        commentId: 46,
        postId: 2,
        userId: 14,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "19.08.2020",
        isConfirmed: true
      },
      {
        commentId: 47,
        postId: 5,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "14.05.2023",
        isConfirmed: true
      },
      {
        commentId: 48,
        postId: 7,
        userId: 14,
        comment: "Well-written and informative!",
        commentCreationDate: "9.09.2018",
        isConfirmed: false
      },
      {
        commentId: 49,
        postId: 8,
        userId: 14,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "8.11.2021",
        isConfirmed: false
      },
      {
        commentId: 50,
        postId: 18,
        userId: 14,
        comment: "Well-written and informative!",
        commentCreationDate: "17.06.2016",
        isConfirmed: true
      },
      {
        commentId: 51,
        postId: 24,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "25.06.2015",
        isConfirmed: true
      },
      {
        commentId: 52,
        postId: 32,
        userId: 14,
        comment: "This article has been really helpful.",
        commentCreationDate: "10.02.2018",
        isConfirmed: true
      },
      {
        commentId: 53,
        postId: 36,
        userId: 14,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "4.06.2023",
        isConfirmed: true
      },
      {
        commentId: 54,
        postId: 38,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "8.03.2016",
        isConfirmed: false
      },
      {
        commentId: 55,
        postId: 41,
        userId: 14,
        comment: "This article has been really helpful.",
        commentCreationDate: "21.11.2019",
        isConfirmed: true
      },
      {
        commentId: 56,
        postId: 44,
        userId: 14,
        comment: "This article has been really helpful.",
        commentCreationDate: "21.11.2019",
        isConfirmed: true
      },
      {
        commentId: 57,
        postId: 45,
        userId: 14,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "1.10.2021",
        isConfirmed: false
      },
      {
        commentId: 58,
        postId: 47,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "16.06.2022",
        isConfirmed: false
      },
      {
        commentId: 59,
        postId: 50,
        userId: 14,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "2.11.2021",
        isConfirmed: false
      },
      {
        commentId: 60,
        postId: 51,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "13.07.2018",
        isConfirmed: false
      },
      {
        commentId: 61,
        postId: 52,
        userId: 14,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "31.03.2019",
        isConfirmed: false
      },
      
      {
        commentId: 143,
        postId: 45,
        userId: 13,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "15.03.2016",
        isConfirmed: true
      },
      {
        commentId: 249,
        postId: 45,
        userId: 13,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "10.03.2016",
        isConfirmed: false
      },
      {
        commentId: 31,
        postId: 48,
        userId: 13,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "6.04.2018",
        isConfirmed: false
      },
      {
        commentId: 212,
        postId: 51,
        userId: 13,
        comment: "This article has been really helpful.",
        commentCreationDate: "10.07.2016",
        isConfirmed: true
      },
      {
        commentId: 34,
        postId: 52,
        userId: 13,
        comment: "This article has been really helpful.",
        commentCreationDate: "3.08.2015",
        isConfirmed: false
      },
      {
        commentId: 149,
        postId: 2,
        userId: 14,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "19.08.2020",
        isConfirmed: true
      },
      {
        commentId: 252,
        postId: 5,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "14.05.2023",
        isConfirmed: true
      },
      {
        commentId: 167,
        postId: 7,
        userId: 14,
        comment: "Well-written and informative!",
        commentCreationDate: "9.09.2018",
        isConfirmed: false
      },
      {
        commentId: 79,
        postId: 8,
        userId: 14,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "8.11.2021",
        isConfirmed: false
      },
      {
        commentId: 197,
        postId: 18,
        userId: 14,
        comment: "Well-written and informative!",
        commentCreationDate: "17.06.2016",
        isConfirmed: true
      },
      {
        commentId: 224,
        postId: 24,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "25.06.2015",
        isConfirmed: true
      },
      {
        commentId: 180,
        postId: 32,
        userId: 14,
        comment: "This article has been really helpful.",
        commentCreationDate: "10.02.2018",
        isConfirmed: true
      },
      {
        commentId: 118,
        postId: 36,
        userId: 14,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "4.06.2023",
        isConfirmed: true
      },
      {
        commentId: 145,
        postId: 38,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "8.03.2016",
        isConfirmed: false
      },
      {
        commentId: 248,
        postId: 41,
        userId: 14,
        comment: "This article has been really helpful.",
        commentCreationDate: "21.11.2019",
        isConfirmed: true
      },
      {
        commentId: 127,
        postId: 44,
        userId: 14,
        comment: "This article has been really helpful.",
        commentCreationDate: "21.11.2019",
        isConfirmed: true
      },
      {
        commentId: 81,
        postId: 45,
        userId: 14,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "1.10.2021",
        isConfirmed: false
      },
      {
        commentId: 174,
        postId: 47,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "16.06.2022",
        isConfirmed: false
      },
      {
        commentId: 258,
        postId: 50,
        userId: 14,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "2.11.2021",
        isConfirmed: false
      },
      {
        commentId: 96,
        postId: 51,
        userId: 14,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "13.07.2018",
        isConfirmed: false
      },
      {
        commentId: 232,
        postId: 52,
        userId: 14,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "31.03.2019",
        isConfirmed: false
      },
      {
        commentId: 77,
        postId: 56,
        userId: 14,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "5.10.2019",
        isConfirmed: false
      },
      {
        commentId: 23,
        postId: 18,
        userId: 15,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "30.11.2020",
        isConfirmed: false
      },
      {
        commentId: 169,
        postId: 22,
        userId: 15,
        comment: "Well-written and informative!",
        commentCreationDate: "1.12.2017",
        isConfirmed: false
      },
      {
        commentId: 92,
        postId: 23,
        userId: 15,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "5.03.2023",
        isConfirmed: true
      },
      {
        commentId: 140,
        postId: 24,
        userId: 15,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "10.09.2022",
        isConfirmed: false
      },
      {
        commentId: 269,
        postId: 24,
        userId: 15,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "28.02.2023",
        isConfirmed: true
      },
      {
        commentId: 54,
        postId: 25,
        userId: 15,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "17.11.2018",
        isConfirmed: true
      },
      {
        commentId: 110,
        postId: 26,
        userId: 15,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "3.02.2022",
        isConfirmed: false
      },
      {
        commentId: 111,
        postId: 49,
        userId: 16,
        comment: "Well-written and informative!",
        commentCreationDate: "13.04.2020",
        isConfirmed: true
      },
      {
        commentId: 112,
        postId: 51,
        userId: 16,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "25.12.2018",
        isConfirmed: true
      },
      {
        commentId: 113,
        postId: 55,
        userId: 16,
        comment: "This article has been really helpful.",
        commentCreationDate: "28.04.2021",
        isConfirmed: false
      },
      {
        commentId: 114,
        postId: 56,
        userId: 16,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "31.12.2018",
        isConfirmed: false
      },
      {
        commentId: 114,
        postId: 57,
        userId: 16,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "27.10.2017",
        isConfirmed: true
      },
      {
        commentId: 115,
        postId: 5,
        userId: 17,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "12.10.2018",
        isConfirmed: true
      },
      {
        commentId: 116,
        postId: 8,
        userId: 17,
        comment: "Well-written and informative!",
        commentCreationDate: "3.03.2021",
        isConfirmed: false
      },
      {
        commentId: 117,
        postId: 15,
        userId: 17,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "31.07.2019",
        isConfirmed: false
      },
      {
        commentId: 118,
        postId: 15,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "2.05.2019",
        isConfirmed: false
      },
      {
        commentId: 119,
        postId: 15,
        userId: 17,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "11.10.2017",
        isConfirmed: true
      },
      {
        commentId: 120,
        postId: 16,
        userId: 17,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "14.11.2019",
        isConfirmed: true
      },
      {
        commentId: 121,
        postId: 19,
        userId: 17,
        comment: "This article has been really helpful.",
        commentCreationDate: "13.11.2019",
        isConfirmed: true
      },
      {
        commentId: 122,
        postId: 20,
        userId: 17,
        comment: "This article has been really helpful.",
        commentCreationDate: "13.03.2018",
        isConfirmed: false
      },
      {
        commentId: 123,
        postId: 22,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "20.04.2020",
        isConfirmed: false
      },
      {
        commentId: 124,
        postId: 28,
        userId: 17,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "19.01.2016",
        isConfirmed: true
      },
      {
        commentId: 125,
        postId: 33,
        userId: 17,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "24.11.2015",
        isConfirmed: true
      },
      {
        commentId: 126,
        postId: 37,
        userId: 17,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "23.03.2017",
        isConfirmed: false
      },
      {
        commentId: 127,
        postId: 47,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "12.03.2016",
        isConfirmed: false
      },
      {
        commentId: 128,
        postId: 56,
        userId: 17,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "26.09.2021",
        isConfirmed: true
      },
      {
        commentId: 129,
        postId: 57,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "6.10.2021",
        isConfirmed: false
      },
      {
        commentId: 130,
        postId: 59,
        userId: 17,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "24.03.2018",
        isConfirmed: false
      },
      {
        commentId: 131,
        postId: 1,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "19.10.2022",
        isConfirmed: true
      },
      {
        commentId: 132,
        postId: 8,
        userId: 18,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "16.08.2020",
        isConfirmed: true
      },
      {
        commentId: 133,
        postId: 10,
        userId: 18,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "15.07.2021",
        isConfirmed: true
      },
      {
        commentId: 134,
        postId: 16,
        userId: 18,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "9.05.2019",
        isConfirmed: true
      },
      {
        commentId: 135,
        postId: 18,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "2.12.2018",
        isConfirmed: true
      },
      {
        commentId: 136,
        postId: 19,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.04.2016",
        isConfirmed: true
      },
      {
        commentId: 137,
        postId: 21,
        userId: 18,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "13.05.2021",
        isConfirmed: true
      },
      {
        commentId: 138,
        postId: 22,
        userId: 18,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "3.06.2016",
        isConfirmed: true
      },
      {
        commentId: 139,
        postId: 25,
        userId: 18,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "10.02.2016",
        isConfirmed: false
      },
      {
        commentId: 140,
        postId: 28,
        userId: 18,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "6.02.2019",
        isConfirmed: false
      },
      {
        commentId: 141,
        postId: 35,
        userId: 18,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "20.02.2021",
        isConfirmed: true
      },
      {
        commentId: 142,
        postId: 37,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "8.03.2020",
        isConfirmed: true
      },
      {
        commentId: 143,
        postId: 39,
        userId: 18,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "20.09.2017",
        isConfirmed: true
      },
      {
        commentId: 144,
        postId: 39,
        userId: 18,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "22.11.2016",
        isConfirmed: false
      },
      {
        commentId: 145,
        postId: 41,
        userId: 18,
        comment: "Well-written and informative!",
        commentCreationDate: "2.08.2020",
        isConfirmed: true
      },
      {
        commentId: 146,
        postId: 45,
        userId: 18,
        comment: "Well-written and informative!",
        commentCreationDate: "23.01.2022",
        isConfirmed: false
      },
      {
        commentId: 147,
        postId: 47,
        userId: 18,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "11.04.2021",
        isConfirmed: true
      },
      {
        commentId: 148,
        postId: 52,
        userId: 18,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "9.02.2016",
        isConfirmed: false
      },
      {
        commentId: 149,
        postId: 57,
        userId: 18,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "19.10.2017",
        isConfirmed: false
      },
      {
        commentId: 150,
        postId: 59,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "18.07.2018",
        isConfirmed: true
      },
      {
        commentId: 151,
        postId: 6,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "26.11.2021",
        isConfirmed: false
      },
      {
        commentId: 152,
        postId: 19,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "5.04.2018",
        isConfirmed: false
      },
      {
        commentId: 153,
        postId: 20,
        userId: 19,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "25.02.2023",
        isConfirmed: true
      },
      {
        commentId: 154,
        postId: 22,
        userId: 19,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "27.05.2017",
        isConfirmed: true
      },
      {
        commentId: 155,
        postId: 27,
        userId: 19,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "10.01.2017",
        isConfirmed: false
      },
      {
        commentId: 156,
        postId: 29,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "27.03.2022",
        isConfirmed: true
      },
      {
        commentId: 157,
        postId: 30,
        userId: 19,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "13.05.2016",
        isConfirmed: false
      },
      {
        commentId: 158,
        postId: 32,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "12.07.2022",
        isConfirmed: false
      },
      {
        commentId: 159,
        postId: 38,
        userId: 19,
        comment: "Great article! It provided valuable insights.",
        commentCreationDate: "25.01.2022",
        isConfirmed: false
      },
      {
        commentId: 160,
        postId: 43,
        userId: 19,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "11.06.2017",
        isConfirmed: true
      },
      {
        commentId: 161,
        postId: 54,
        userId: 19,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "24.07.2017",
        isConfirmed: false
      },
      {
        commentId: 162,
        postId: 54,
        userId: 19,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "12.04.2017",
        isConfirmed: false
      },
      {
        commentId: 163,
        postId: 55,
        userId: 16,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "19.01.2022",
        isConfirmed: true
      },
      {
        commentId: 164,
        postId: 12,
        userId: 16,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "9.03.2022",
        isConfirmed: false
      },
      {
        commentId: 165,
        postId: 13,
        userId: 16,
        comment: "Well-written and informative!",
        commentCreationDate: "17.05.2022",
        isConfirmed: false
      },
      {
        commentId: 166,
        postId: 28,
        userId: 16,
        comment: "Well-written and informative!",
        commentCreationDate: "9.11.2019",
        isConfirmed: false
      },
      {
        commentId: 167,
        postId: 41,
        userId: 16,
        comment: "This article has been really helpful.",
        commentCreationDate: "7.05.2021",
        isConfirmed: false
      },
      {
        commentId: 168,
        postId: 53,
        userId: 16,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "12.12.2022",
        isConfirmed: true
      },
      {
        commentId: 169,
        postId: 58,
        userId: 16,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "20.02.2021",
        isConfirmed: false
      },
      {
        commentId: 170,
        postId: 58,
        userId: 16,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.08.2020",
        isConfirmed: true
      }      
  ]
  commentsListName: string = 'commentsList';

  constructor(private createService: CreateService) {
    this.createService.setDataList(this.commentsList, this.commentsListName);
    this.commentsList = this.createService.getDataList(this.commentsList, this.commentsListName);
  }
 
}


