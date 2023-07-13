import { Injectable } from '@angular/core';
import { CreateService } from 'src/app/create/create.service';
import { Comments } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'})
  
export class CommentsService {
  
  private commentsList: Comments[] = [
      {
        commentId: 8,
        postId: 2,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "25.03.2021",
        isConfirmed: false
      },
      {
        commentId: 253,
        postId: 11,
        userId: 1,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "22.05.2017",
        isConfirmed: false
      },
      {
        commentId: 89,
        postId: 13,
        userId: 1,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "10.02.2020",
        isConfirmed: true
      },
      {
        commentId: 242,
        postId: 15,
        userId: 1,
        comment: "Well-written and informative!",
        commentCreationDate: "13.02.2021",
        isConfirmed: true
      },
      {
        commentId: 200,
        postId: 26,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "26.12.2017",
        isConfirmed: true
      },
      {
        commentId: 66,
        postId: 28,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "26.02.2023",
        isConfirmed: false
      },
      {
        commentId: 135,
        postId: 28,
        userId: 1,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "10.04.2023",
        isConfirmed: true
      },
      {
        commentId: 240,
        postId: 29,
        userId: 1,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "17.01.2023",
        isConfirmed: true
      },
      {
        commentId: 211,
        postId: 30,
        userId: 1,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "2.08.2017",
        isConfirmed: false
      },
      {
        commentId: 76,
        postId: 33,
        userId: 1,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "2.03.2021",
        isConfirmed: true
      },
      {
        commentId: 125,
        postId: 34,
        userId: 1,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "16.08.2017",
        isConfirmed: true
      },
      {
        commentId: 287,
        postId: 37,
        userId: 1,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "23.08.2015",
        isConfirmed: true
      },
      {
        commentId: 259,
        postId: 39,
        userId: 1,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "9.10.2021",
        isConfirmed: true
      },
      {
        commentId: 266,
        postId: 51,
        userId: 1,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "2.08.2016",
        isConfirmed: false
      },
      {
        commentId: 63,
        postId: 57,
        userId: 1,
        comment: "This article has been really helpful.",
        commentCreationDate: "13.05.2016",
        isConfirmed: false
      },
      {
        commentId: 35,
        postId: 57,
        userId: 1,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "22.01.2021",
        isConfirmed: true
      },
      {
        commentId: 60,
        postId: 58,
        userId: 1,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "26.08.2019",
        isConfirmed: true
      },
      {
        commentId: 245,
        postId: 59,
        userId: 1,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "30.01.2023",
        isConfirmed: false
      },
      {
        commentId: 293,
        postId: 59,
        userId: 1,
        comment: "Well-written and informative!",
        commentCreationDate: "12.04.2021",
        isConfirmed: false
      },
      {
        commentId: 112,
        postId: 60,
        userId: 1,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "10.12.2016",
        isConfirmed: false
      },
      {
        commentId: 91,
        postId: 1,
        userId: 2,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "8.04.2016",
        isConfirmed: true
      },
      {
        commentId: 222,
        postId: 1,
        userId: 2,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "1.01.2016",
        isConfirmed: false
      },
      {
        commentId: 265,
        postId: 2,
        userId: 2,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.12.2022",
        isConfirmed: false
      },
      {
        commentId: 44,
        postId: 4,
        userId: 2,
        comment: "This article has been really helpful.",
        commentCreationDate: "5.05.2023",
        isConfirmed: true
      },
      {
        commentId: 55,
        postId: 5,
        userId: 2,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "25.04.2017",
        isConfirmed: true
      },
      {
        commentId: 14,
        postId: 6,
        userId: 2,
        comment: "This article has been really helpful.",
        commentCreationDate: "16.01.2021",
        isConfirmed: true
      },
      {
        commentId: 196,
        postId: 8,
        userId: 2,
        comment: "Well-written and informative!",
        commentCreationDate: "29.07.2018",
        isConfirmed: true
      },
      {
        commentId: 202,
        postId: 21,
        userId: 2,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "10.09.2015",
        isConfirmed: false
      },
      {
        commentId: 241,
        postId: 24,
        userId: 2,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "2.08.2019",
        isConfirmed: false
      },
      {
        commentId: 29,
        postId: 26,
        userId: 2,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "24.11.2019",
        isConfirmed: true
      },
      {
        commentId: 129,
        postId: 29,
        userId: 2,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "7.07.2022",
        isConfirmed: false
      },
      {
        commentId: 65,
        postId: 30,
        userId: 2,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "26.07.2018",
        isConfirmed: true
      },
      {
        commentId: 184,
        postId: 31,
        userId: 2,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "5.11.2019",
        isConfirmed: false
      },
      {
        commentId: 22,
        postId: 33,
        userId: 2,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "19.05.2023",
        isConfirmed: true
      },
      {
        commentId: 51,
        postId: 37,
        userId: 2,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "22.03.2018",
        isConfirmed: true
      },
      {
        commentId: 217,
        postId: 43,
        userId: 2,
        comment: "Well-written and informative!",
        commentCreationDate: "6.06.2020",
        isConfirmed: false
      },
      {
        commentId: 151,
        postId: 2,
        userId: 3,
        comment: "Well-written and informative!",
        commentCreationDate: "8.05.2021",
        isConfirmed: true
      },
      {
        commentId: 268,
        postId: 12,
        userId: 3,
        comment: "Well-written and informative!",
        commentCreationDate: "13.01.2022",
        isConfirmed: false
      },
      {
        commentId: 47,
        postId: 14,
        userId: 3,
        comment: "This article has been really helpful.",
        commentCreationDate: "8.08.2021",
        isConfirmed: false
      },
      {
        commentId: 285,
        postId: 19,
        userId: 3,
        comment: "Well-written and informative!",
        commentCreationDate: "29.05.2021",
        isConfirmed: true
      },
      {
        commentId: 286,
        postId: 20,
        userId: 3,
        comment: "Well-written and informative!",
        commentCreationDate: "19.01.2019",
        isConfirmed: false
      },
      {
        commentId: 162,
        postId: 24,
        userId: 3,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "26.09.2020",
        isConfirmed: false
      },
      {
        commentId: 176,
        postId: 25,
        userId: 3,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "19.10.2015",
        isConfirmed: true
      },
      {
        commentId: 284,
        postId: 29,
        userId: 3,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "25.10.2019",
        isConfirmed: false
      },
      {
        commentId: 210,
        postId: 31,
        userId: 3,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "13.06.2023",
        isConfirmed: true
      },
      {
        commentId: 100,
        postId: 37,
        userId: 3,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "11.05.2020",
        isConfirmed: true
      },
      {
        commentId: 299,
        postId: 43,
        userId: 3,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "12.07.2021",
        isConfirmed: false
      },
      {
        commentId: 260,
        postId: 43,
        userId: 3,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "20.02.2016",
        isConfirmed: false
      },
      {
        commentId: 117,
        postId: 56,
        userId: 3,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "12.04.2021",
        isConfirmed: true
      },
      {
        commentId: 84,
        postId: 56,
        userId: 3,
        comment: "NA",
        commentCreationDate: "10.07.2019",
        isConfirmed: true
      },
      {
        commentId: 205,
        postId: 57,
        userId: 3,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "2.11.2017",
        isConfirmed: false
      },
      {
        commentId: 283,
        postId: 58,
        userId: 3,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "28.05.2023",
        isConfirmed: false
      },
      {
        commentId: 250,
        postId: 2,
        userId: 4,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "21.08.2022",
        isConfirmed: false
      },
      {
        commentId: 99,
        postId: 5,
        userId: 4,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "27.12.2017",
        isConfirmed: false
      },
      {
        commentId: 190,
        postId: 7,
        userId: 4,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "28.05.2020",
        isConfirmed: false
      },
      {
        commentId: 123,
        postId: 14,
        userId: 4,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "24.02.2019",
        isConfirmed: false
      },
      {
        commentId: 85,
        postId: 19,
        userId: 4,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "17.11.2016",
        isConfirmed: false
      },
      {
        commentId: 215,
        postId: 23,
        userId: 4,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "23.04.2016",
        isConfirmed: true
      },
      {
        commentId: 9,
        postId: 31,
        userId: 4,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "18.12.2015",
        isConfirmed: true
      },
      {
        commentId: 289,
        postId: 31,
        userId: 4,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "21.11.2020",
        isConfirmed: false
      },
      {
        commentId: 193,
        postId: 32,
        userId: 4,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "25.02.2018",
        isConfirmed: true
      },
      {
        commentId: 230,
        postId: 35,
        userId: 4,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "18.06.2022",
        isConfirmed: false
      },
      {
        commentId: 58,
        postId: 36,
        userId: 4,
        comment: "Well-written and informative!",
        commentCreationDate: "1.10.2017",
        isConfirmed: true
      },
      {
        commentId: 158,
        postId: 51,
        userId: 4,
        comment: "This article has been really helpful.",
        commentCreationDate: "18.12.2021",
        isConfirmed: true
      },
      {
        commentId: 234,
        postId: 59,
        userId: 4,
        comment: "Well-written and informative!",
        commentCreationDate: "10.10.2021",
        isConfirmed: true
      },
      {
        commentId: 80,
        postId: 8,
        userId: 5,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "20.04.2017",
        isConfirmed: true
      },
      {
        commentId: 97,
        postId: 12,
        userId: 5,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "12.12.2020",
        isConfirmed: true
      },
      {
        commentId: 188,
        postId: 14,
        userId: 5,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "24.01.2018",
        isConfirmed: true
      },
      {
        commentId: 164,
        postId: 21,
        userId: 5,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "5.12.2019",
        isConfirmed: false
      },
      {
        commentId: 159,
        postId: 23,
        userId: 5,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "11.05.2021",
        isConfirmed: false
      },
      {
        commentId: 231,
        postId: 27,
        userId: 5,
        comment: "Well-written and informative!",
        commentCreationDate: "29.05.2021",
        isConfirmed: false
      },
      {
        commentId: 270,
        postId: 27,
        userId: 5,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "6.12.2021",
        isConfirmed: true
      },
      {
        commentId: 226,
        postId: 28,
        userId: 5,
        comment: "This article has been really helpful.",
        commentCreationDate: "10.04.2016",
        isConfirmed: true
      },
      {
        commentId: 218,
        postId: 45,
        userId: 5,
        comment: "Well-written and informative!",
        commentCreationDate: "17.09.2022",
        isConfirmed: true
      },
      {
        commentId: 294,
        postId: 46,
        userId: 5,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "28.09.2020",
        isConfirmed: false
      },
      {
        commentId: 290,
        postId: 46,
        userId: 5,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "14.09.2019",
        isConfirmed: true
      },
      {
        commentId: 236,
        postId: 10,
        userId: 6,
        comment: "Well-written and informative!",
        commentCreationDate: "9.03.2019",
        isConfirmed: true
      },
      {
        commentId: 73,
        postId: 12,
        userId: 6,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "26.09.2022",
        isConfirmed: false
      },
      {
        commentId: 28,
        postId: 12,
        userId: 6,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "30.12.2022",
        isConfirmed: true
      },
      {
        commentId: 61,
        postId: 23,
        userId: 6,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "3.04.2018",
        isConfirmed: true
      },
      {
        commentId: 43,
        postId: 27,
        userId: 6,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "15.09.2015",
        isConfirmed: false
      },
      {
        commentId: 256,
        postId: 29,
        userId: 6,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "14.08.2020",
        isConfirmed: true
      },
      {
        commentId: 207,
        postId: 41,
        userId: 6,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "16.10.2022",
        isConfirmed: true
      },
      {
        commentId: 273,
        postId: 43,
        userId: 6,
        comment: "Well-written and informative!",
        commentCreationDate: "17.04.2022",
        isConfirmed: true
      },
      {
        commentId: 128,
        postId: 44,
        userId: 6,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "6.11.2016",
        isConfirmed: true
      },
      {
        commentId: 179,
        postId: 47,
        userId: 6,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "19.01.2018",
        isConfirmed: false
      },
      {
        commentId: 133,
        postId: 49,
        userId: 6,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "4.02.2018",
        isConfirmed: true
      },
      {
        commentId: 150,
        postId: 54,
        userId: 6,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "2.08.2022",
        isConfirmed: false
      },
      {
        commentId: 42,
        postId: 55,
        userId: 6,
        comment: "Great article! It provided valuable insights.",
        commentCreationDate: "21.06.2019",
        isConfirmed: true
      },
      {
        commentId: 130,
        postId: 5,
        userId: 7,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "23.01.2020",
        isConfirmed: true
      },
      {
        commentId: 94,
        postId: 6,
        userId: 7,
        comment: "Well-written and informative!",
        commentCreationDate: "18.11.2020",
        isConfirmed: true
      },
      {
        commentId: 139,
        postId: 7,
        userId: 7,
        comment: "Well-written and informative!",
        commentCreationDate: "24.12.2018",
        isConfirmed: false
      },
      {
        commentId: 213,
        postId: 10,
        userId: 7,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "7.12.2022",
        isConfirmed: false
      },
      {
        commentId: 78,
        postId: 18,
        userId: 7,
        comment: "Great article! It provided valuable insights.",
        commentCreationDate: "2.09.2022",
        isConfirmed: true
      },
      {
        commentId: 16,
        postId: 21,
        userId: 7,
        comment: "Well-written and informative!",
        commentCreationDate: "12.10.2016",
        isConfirmed: true
      },
      {
        commentId: 281,
        postId: 29,
        userId: 7,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "15.12.2016",
        isConfirmed: true
      },
      {
        commentId: 114,
        postId: 38,
        userId: 7,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "28.04.2023",
        isConfirmed: true
      },
      {
        commentId: 195,
        postId: 41,
        userId: 7,
        comment: "Well-written and informative!",
        commentCreationDate: "10.05.2023",
        isConfirmed: true
      },
      {
        commentId: 276,
        postId: 42,
        userId: 7,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "13.10.2018",
        isConfirmed: false
      },
      {
        commentId: 298,
        postId: 43,
        userId: 7,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "9.05.2023",
        isConfirmed: false
      },
      {
        commentId: 153,
        postId: 47,
        userId: 7,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "27.02.2019",
        isConfirmed: true
      },
      {
        commentId: 71,
        postId: 49,
        userId: 7,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "11.03.2022",
        isConfirmed: true
      },
      {
        commentId: 171,
        postId: 54,
        userId: 7,
        comment: "Well-written and informative!",
        commentCreationDate: "11.09.2015",
        isConfirmed: true
      },
      {
        commentId: 220,
        postId: 55,
        userId: 7,
        comment: "This article has been really helpful.",
        commentCreationDate: "11.09.2019",
        isConfirmed: false
      },
      {
        commentId: 194,
        postId: 58,
        userId: 7,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "1.07.2021",
        isConfirmed: true
      },
      {
        commentId: 68,
        postId: 7,
        userId: 8,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "7.10.2021",
        isConfirmed: true
      },
      {
        commentId: 165,
        postId: 8,
        userId: 8,
        comment: "This article has been really helpful.",
        commentCreationDate: "6.06.2021",
        isConfirmed: false
      },
      {
        commentId: 33,
        postId: 10,
        userId: 8,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "28.09.2015",
        isConfirmed: true
      },
      {
        commentId: 198,
        postId: 10,
        userId: 8,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "2.03.2017",
        isConfirmed: true
      },
      {
        commentId: 104,
        postId: 18,
        userId: 8,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "25.08.2022",
        isConfirmed: true
      },
      {
        commentId: 278,
        postId: 19,
        userId: 8,
        comment: "This article has been really helpful.",
        commentCreationDate: "5.11.2020",
        isConfirmed: false
      },
      {
        commentId: 208,
        postId: 24,
        userId: 8,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "13.11.2018",
        isConfirmed: true
      },
      {
        commentId: 185,
        postId: 36,
        userId: 8,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "13.03.2022",
        isConfirmed: false
      },
      {
        commentId: 49,
        postId: 38,
        userId: 8,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "10.12.2019",
        isConfirmed: true
      },
      {
        commentId: 30,
        postId: 46,
        userId: 8,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "28.02.2020",
        isConfirmed: true
      },
      {
        commentId: 113,
        postId: 53,
        userId: 8,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "28.09.2022",
        isConfirmed: false
      },
      {
        commentId: 221,
        postId: 54,
        userId: 8,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "17.03.2019",
        isConfirmed: true
      },
      {
        commentId: 267,
        postId: 54,
        userId: 8,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "28.04.2019",
        isConfirmed: true
      },
      {
        commentId: 95,
        postId: 2,
        userId: 9,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "17.01.2023",
        isConfirmed: false
      },
      {
        commentId: 39,
        postId: 6,
        userId: 9,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "15.09.2017",
        isConfirmed: true
      },
      {
        commentId: 142,
        postId: 6,
        userId: 9,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "26.02.2020",
        isConfirmed: false
      },
      {
        commentId: 251,
        postId: 7,
        userId: 9,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "10.09.2017",
        isConfirmed: true
      },
      {
        commentId: 3,
        postId: 8,
        userId: 9,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "10.06.2017",
        isConfirmed: true
      },
      {
        commentId: 12,
        postId: 12,
        userId: 9,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "18.09.2022",
        isConfirmed: true
      },
      {
        commentId: 181,
        postId: 12,
        userId: 9,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "25.07.2020",
        isConfirmed: true
      },
      {
        commentId: 101,
        postId: 14,
        userId: 9,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "22.01.2016",
        isConfirmed: true
      },
      {
        commentId: 243,
        postId: 16,
        userId: 9,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "12.12.2020",
        isConfirmed: false
      },
      {
        commentId: 209,
        postId: 18,
        userId: 9,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "5.10.2015",
        isConfirmed: false
      },
      {
        commentId: 88,
        postId: 22,
        userId: 9,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "14.07.2020",
        isConfirmed: true
      },
      {
        commentId: 21,
        postId: 22,
        userId: 9,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "17.02.2020",
        isConfirmed: true
      },
      {
        commentId: 2,
        postId: 36,
        userId: 9,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "11.02.2017",
        isConfirmed: false
      },
      {
        commentId: 7,
        postId: 39,
        userId: 9,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "25.07.2017",
        isConfirmed: false
      },
      {
        commentId: 292,
        postId: 39,
        userId: 9,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "24.11.2015",
        isConfirmed: false
      },
      {
        commentId: 126,
        postId: 42,
        userId: 9,
        comment: "Well-written and informative!",
        commentCreationDate: "4.02.2022",
        isConfirmed: false
      },
      {
        commentId: 27,
        postId: 43,
        userId: 9,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "28.08.2015",
        isConfirmed: true
      },
      {
        commentId: 10,
        postId: 51,
        userId: 9,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "28.11.2022",
        isConfirmed: true
      },
      {
        commentId: 40,
        postId: 53,
        userId: 9,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "14.09.2018",
        isConfirmed: true
      },
      {
        commentId: 271,
        postId: 53,
        userId: 9,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "4.04.2019",
        isConfirmed: true
      },
      {
        commentId: 233,
        postId: 54,
        userId: 9,
        comment: "This article has been really helpful.",
        commentCreationDate: "4.08.2018",
        isConfirmed: false
      },
      {
        commentId: 17,
        postId: 58,
        userId: 9,
        comment: "Great article! It provided valuable insights.",
        commentCreationDate: "23.12.2015",
        isConfirmed: false
      },
      {
        commentId: 177,
        postId: 59,
        userId: 9,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "16.06.2017",
        isConfirmed: true
      },
      {
        commentId: 247,
        postId: 8,
        userId: 10,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "27.05.2019",
        isConfirmed: true
      },
      {
        commentId: 166,
        postId: 8,
        userId: 10,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "31.07.2017",
        isConfirmed: true
      },
      {
        commentId: 239,
        postId: 13,
        userId: 10,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "28.08.2015",
        isConfirmed: false
      },
      {
        commentId: 116,
        postId: 22,
        userId: 10,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "5.11.2017",
        isConfirmed: false
      },
      {
        commentId: 134,
        postId: 33,
        userId: 10,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "16.09.2020",
        isConfirmed: false
      },
      {
        commentId: 291,
        postId: 34,
        userId: 10,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "11.06.2022",
        isConfirmed: true
      },
      {
        commentId: 155,
        postId: 40,
        userId: 10,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "20.03.2018",
        isConfirmed: false
      },
      {
        commentId: 280,
        postId: 54,
        userId: 10,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "25.08.2022",
        isConfirmed: true
      },
      {
        commentId: 295,
        postId: 54,
        userId: 10,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "10.04.2020",
        isConfirmed: true
      },
      {
        commentId: 146,
        postId: 57,
        userId: 10,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "11.09.2019",
        isConfirmed: false
      },
      {
        commentId: 297,
        postId: 60,
        userId: 10,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "20.03.2019",
        isConfirmed: true
      },
      {
        commentId: 154,
        postId: 15,
        userId: 11,
        comment: "This article has been really helpful.",
        commentCreationDate: "6.08.2018",
        isConfirmed: false
      },
      {
        commentId: 274,
        postId: 16,
        userId: 11,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "28.05.2021",
        isConfirmed: true
      },
      {
        commentId: 82,
        postId: 20,
        userId: 11,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "19.10.2015",
        isConfirmed: true
      },
      {
        commentId: 57,
        postId: 24,
        userId: 11,
        comment: "This article has been really helpful.",
        commentCreationDate: "22.04.2023",
        isConfirmed: true
      },
      {
        commentId: 109,
        postId: 24,
        userId: 11,
        comment: "This article has been really helpful.",
        commentCreationDate: "25.03.2016",
        isConfirmed: false
      },
      {
        commentId: 244,
        postId: 29,
        userId: 11,
        comment: "This article has been really helpful.",
        commentCreationDate: "5.10.2017",
        isConfirmed: true
      },
      {
        commentId: 170,
        postId: 31,
        userId: 11,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "15.07.2020",
        isConfirmed: true
      },
      {
        commentId: 173,
        postId: 34,
        userId: 11,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "8.09.2019",
        isConfirmed: true
      },
      {
        commentId: 132,
        postId: 37,
        userId: 11,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "15.02.2023",
        isConfirmed: false
      },
      {
        commentId: 282,
        postId: 38,
        userId: 11,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "22.07.2017",
        isConfirmed: false
      },
      {
        commentId: 189,
        postId: 39,
        userId: 11,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "21.12.2022",
        isConfirmed: false
      },
      {
        commentId: 263,
        postId: 45,
        userId: 11,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.06.2017",
        isConfirmed: true
      },
      {
        commentId: 257,
        postId: 48,
        userId: 11,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "1.10.2018",
        isConfirmed: false
      },
      {
        commentId: 261,
        postId: 55,
        userId: 11,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "13.04.2019",
        isConfirmed: true
      },
      {
        commentId: 246,
        postId: 11,
        userId: 12,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "19.05.2018",
        isConfirmed: true
      },
      {
        commentId: 124,
        postId: 13,
        userId: 12,
        comment: "This article has been really helpful.",
        commentCreationDate: "16.03.2018",
        isConfirmed: true
      },
      {
        commentId: 56,
        postId: 14,
        userId: 12,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.08.2016",
        isConfirmed: true
      },
      {
        commentId: 279,
        postId: 14,
        userId: 12,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "9.04.2016",
        isConfirmed: true
      },
      {
        commentId: 62,
        postId: 20,
        userId: 12,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "18.12.2022",
        isConfirmed: false
      },
      {
        commentId: 15,
        postId: 24,
        userId: 12,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "24.05.2017",
        isConfirmed: false
      },
      {
        commentId: 219,
        postId: 25,
        userId: 12,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "23.02.2019",
        isConfirmed: false
      },
      {
        commentId: 48,
        postId: 26,
        userId: 12,
        comment: "Well-written and informative!",
        commentCreationDate: "14.12.2021",
        isConfirmed: false
      },
      {
        commentId: 121,
        postId: 30,
        userId: 12,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "16.02.2020",
        isConfirmed: false
      },
      {
        commentId: 90,
        postId: 34,
        userId: 12,
        comment: "This article has been really helpful.",
        commentCreationDate: "24.06.2021",
        isConfirmed: false
      },
      {
        commentId: 227,
        postId: 35,
        userId: 12,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "5.07.2022",
        isConfirmed: true
      },
      {
        commentId: 199,
        postId: 36,
        userId: 12,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "19.03.2023",
        isConfirmed: false
      },
      {
        commentId: 152,
        postId: 46,
        userId: 12,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "10.08.2022",
        isConfirmed: true
      },
      {
        commentId: 102,
        postId: 52,
        userId: 12,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "11.01.2020",
        isConfirmed: true
      },
      {
        commentId: 52,
        postId: 2,
        userId: 13,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "8.02.2017",
        isConfirmed: true
      },
      {
        commentId: 264,
        postId: 11,
        userId: 13,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "9.09.2021",
        isConfirmed: true
      },
      {
        commentId: 156,
        postId: 13,
        userId: 13,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "12.09.2019",
        isConfirmed: false
      },
      {
        commentId: 187,
        postId: 16,
        userId: 13,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "12.10.2017",
        isConfirmed: false
      },
      {
        commentId: 238,
        postId: 23,
        userId: 13,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "23.08.2022",
        isConfirmed: false
      },
      {
        commentId: 225,
        postId: 33,
        userId: 13,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "20.12.2017",
        isConfirmed: true
      },
      {
        commentId: 74,
        postId: 37,
        userId: 13,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "11.09.2015",
        isConfirmed: true
      },
      {
        commentId: 20,
        postId: 44,
        userId: 13,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "15.09.2019",
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
        commentId: 115,
        postId: 26,
        userId: 15,
        comment: "This article has been really helpful.",
        commentCreationDate: "30.06.2020",
        isConfirmed: true
      },
      {
        commentId: 13,
        postId: 27,
        userId: 15,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "31.07.2016",
        isConfirmed: true
      },
      {
        commentId: 229,
        postId: 36,
        userId: 15,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "30.12.2018",
        isConfirmed: true
      },
      {
        commentId: 75,
        postId: 37,
        userId: 15,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "31.07.2016",
        isConfirmed: true
      },
      {
        commentId: 141,
        postId: 38,
        userId: 15,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "29.08.2015",
        isConfirmed: true
      },
      {
        commentId: 131,
        postId: 40,
        userId: 15,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "7.04.2023",
        isConfirmed: false
      },
      {
        commentId: 175,
        postId: 40,
        userId: 15,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "8.09.2020",
        isConfirmed: false
      },
      {
        commentId: 206,
        postId: 41,
        userId: 15,
        comment: "Well-written and informative!",
        commentCreationDate: "2.05.2018",
        isConfirmed: false
      },
      {
        commentId: 160,
        postId: 44,
        userId: 15,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.10.2018",
        isConfirmed: true
      },
      {
        commentId: 262,
        postId: 45,
        userId: 15,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "5.03.2022",
        isConfirmed: false
      },
      {
        commentId: 136,
        postId: 52,
        userId: 15,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "6.06.2023",
        isConfirmed: false
      },
      {
        commentId: 11,
        postId: 53,
        userId: 15,
        comment: "Looking forward to more content like this!",
        commentCreationDate: "25.08.2020",
        isConfirmed: false
      },
      {
        commentId: 93,
        postId: 4,
        userId: 16,
        comment: "This article has been really helpful.",
        commentCreationDate: "17.08.2019",
        isConfirmed: true
      },
      {
        commentId: 228,
        postId: 7,
        userId: 16,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "12.01.2018",
        isConfirmed: false
      },
      {
        commentId: 19,
        postId: 10,
        userId: 16,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "21.10.2019",
        isConfirmed: false
      },
      {
        commentId: 178,
        postId: 12,
        userId: 16,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "26.02.2019",
        isConfirmed: true
      },
      {
        commentId: 38,
        postId: 13,
        userId: 16,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "20.06.2015",
        isConfirmed: false
      },
      {
        commentId: 192,
        postId: 16,
        userId: 16,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "27.06.2021",
        isConfirmed: true
      },
      {
        commentId: 5,
        postId: 24,
        userId: 16,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "24.09.2019",
        isConfirmed: true
      },
      {
        commentId: 120,
        postId: 24,
        userId: 16,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "24.10.2020",
        isConfirmed: true
      },
      {
        commentId: 277,
        postId: 29,
        userId: 16,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.02.2016",
        isConfirmed: false
      },
      {
        commentId: 223,
        postId: 31,
        userId: 16,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "5.06.2019",
        isConfirmed: true
      },
      {
        commentId: 69,
        postId: 49,
        userId: 16,
        comment: "Well-written and informative!",
        commentCreationDate: "13.04.2020",
        isConfirmed: true
      },
      {
        commentId: 25,
        postId: 51,
        userId: 16,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "25.12.2018",
        isConfirmed: true
      },
      {
        commentId: 201,
        postId: 55,
        userId: 16,
        comment: "This article has been really helpful.",
        commentCreationDate: "28.04.2021",
        isConfirmed: false
      },
      {
        commentId: 50,
        postId: 56,
        userId: 16,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "31.12.2018",
        isConfirmed: false
      },
      {
        commentId: 45,
        postId: 57,
        userId: 16,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "27.10.2017",
        isConfirmed: true
      },
      {
        commentId: 183,
        postId: 5,
        userId: 17,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "12.10.2018",
        isConfirmed: true
      },
      {
        commentId: 36,
        postId: 8,
        userId: 17,
        comment: "Well-written and informative!",
        commentCreationDate: "3.03.2021",
        isConfirmed: false
      },
      {
        commentId: 67,
        postId: 15,
        userId: 17,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "31.07.2019",
        isConfirmed: false
      },
      {
        commentId: 235,
        postId: 15,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "2.05.2019",
        isConfirmed: false
      },
      {
        commentId: 163,
        postId: 15,
        userId: 17,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "11.10.2017",
        isConfirmed: true
      },
      {
        commentId: 255,
        postId: 16,
        userId: 17,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "14.11.2019",
        isConfirmed: true
      },
      {
        commentId: 161,
        postId: 19,
        userId: 17,
        comment: "This article has been really helpful.",
        commentCreationDate: "13.11.2019",
        isConfirmed: true
      },
      {
        commentId: 144,
        postId: 20,
        userId: 17,
        comment: "This article has been really helpful.",
        commentCreationDate: "13.03.2018",
        isConfirmed: false
      },
      {
        commentId: 87,
        postId: 22,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "20.04.2020",
        isConfirmed: false
      },
      {
        commentId: 137,
        postId: 28,
        userId: 17,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "19.01.2016",
        isConfirmed: true
      },
      {
        commentId: 108,
        postId: 33,
        userId: 17,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "24.11.2015",
        isConfirmed: true
      },
      {
        commentId: 191,
        postId: 37,
        userId: 17,
        comment: "Well-written and thought-provoking.",
        commentCreationDate: "23.03.2017",
        isConfirmed: false
      },
      {
        commentId: 168,
        postId: 47,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "12.03.2016",
        isConfirmed: false
      },
      {
        commentId: 86,
        postId: 56,
        userId: 17,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "26.09.2021",
        isConfirmed: true
      },
      {
        commentId: 59,
        postId: 57,
        userId: 17,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "6.10.2021",
        isConfirmed: false
      },
      {
        commentId: 148,
        postId: 59,
        userId: 17,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "24.03.2018",
        isConfirmed: false
      },
      {
        commentId: 107,
        postId: 1,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "19.10.2022",
        isConfirmed: true
      },
      {
        commentId: 275,
        postId: 8,
        userId: 18,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "16.08.2020",
        isConfirmed: true
      },
      {
        commentId: 122,
        postId: 10,
        userId: 18,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "15.07.2021",
        isConfirmed: true
      },
      {
        commentId: 32,
        postId: 16,
        userId: 18,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "9.05.2019",
        isConfirmed: true
      },
      {
        commentId: 272,
        postId: 18,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "2.12.2018",
        isConfirmed: true
      },
      {
        commentId: 106,
        postId: 19,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "23.04.2016",
        isConfirmed: true
      },
      {
        commentId: 138,
        postId: 21,
        userId: 18,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "13.05.2021",
        isConfirmed: true
      },
      {
        commentId: 182,
        postId: 22,
        userId: 18,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "3.06.2016",
        isConfirmed: true
      },
      {
        commentId: 1,
        postId: 25,
        userId: 18,
        comment: "Great post! Really enjoyed reading it.",
        commentCreationDate: "10.02.2016",
        isConfirmed: false
      },
      {
        commentId: 300,
        postId: 28,
        userId: 18,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "6.02.2019",
        isConfirmed: false
      },
      {
        commentId: 41,
        postId: 35,
        userId: 18,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "20.02.2021",
        isConfirmed: true
      },
      {
        commentId: 288,
        postId: 37,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "8.03.2020",
        isConfirmed: true
      },
      {
        commentId: 111,
        postId: 39,
        userId: 18,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "20.09.2017",
        isConfirmed: true
      },
      {
        commentId: 254,
        postId: 39,
        userId: 18,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "22.11.2016",
        isConfirmed: false
      },
      {
        commentId: 105,
        postId: 41,
        userId: 18,
        comment: "Well-written and informative!",
        commentCreationDate: "2.08.2020",
        isConfirmed: true
      },
      {
        commentId: 6,
        postId: 45,
        userId: 18,
        comment: "Well-written and informative!",
        commentCreationDate: "23.01.2022",
        isConfirmed: false
      },
      {
        commentId: 46,
        postId: 47,
        userId: 18,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "11.04.2021",
        isConfirmed: true
      },
      {
        commentId: 64,
        postId: 52,
        userId: 18,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "9.02.2016",
        isConfirmed: false
      },
      {
        commentId: 83,
        postId: 57,
        userId: 18,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "19.10.2017",
        isConfirmed: false
      },
      {
        commentId: 24,
        postId: 59,
        userId: 18,
        comment: "This article has been really helpful.",
        commentCreationDate: "18.07.2018",
        isConfirmed: true
      },
      {
        commentId: 53,
        postId: 6,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "26.11.2021",
        isConfirmed: false
      },
      {
        commentId: 186,
        postId: 19,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "5.04.2018",
        isConfirmed: false
      },
      {
        commentId: 157,
        postId: 20,
        userId: 19,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "25.02.2023",
        isConfirmed: true
      },
      {
        commentId: 172,
        postId: 22,
        userId: 19,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "27.05.2017",
        isConfirmed: true
      },
      {
        commentId: 72,
        postId: 27,
        userId: 19,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "10.01.2017",
        isConfirmed: false
      },
      {
        commentId: 204,
        postId: 29,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "27.03.2022",
        isConfirmed: true
      },
      {
        commentId: 98,
        postId: 30,
        userId: 19,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "13.05.2016",
        isConfirmed: false
      },
      {
        commentId: 237,
        postId: 32,
        userId: 19,
        comment: "Well-written and informative!",
        commentCreationDate: "12.07.2022",
        isConfirmed: false
      },
      {
        commentId: 18,
        postId: 38,
        userId: 19,
        comment: "Great article! It provided valuable insights.",
        commentCreationDate: "25.01.2022",
        isConfirmed: false
      },
      {
        commentId: 203,
        postId: 43,
        userId: 19,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "11.06.2017",
        isConfirmed: true
      },
      {
        commentId: 214,
        postId: 54,
        userId: 19,
        comment: "I have a different opinion on this topic.",
        commentCreationDate: "24.07.2017",
        isConfirmed: false
      },
      {
        commentId: 296,
        postId: 54,
        userId: 19,
        comment: "This topic has always fascinated me.",
        commentCreationDate: "12.04.2017",
        isConfirmed: false
      },
      {
        commentId: 216,
        postId: 55,
        userId: 16,
        comment: "I completely agree with your point of view.",
        commentCreationDate: "19.01.2022",
        isConfirmed: true
      },
      {
        commentId: 70,
        postId: 12,
        userId: 16,
        comment: "Great post! Thanks for sharing.",
        commentCreationDate: "9.03.2022",
        isConfirmed: false
      },
      {
        commentId: 147,
        postId: 13,
        userId: 16,
        comment: "Well-written and informative!",
        commentCreationDate: "17.05.2022",
        isConfirmed: false
      },
      {
        commentId: 26,
        postId: 28,
        userId: 16,
        comment: "Well-written and informative!",
        commentCreationDate: "9.11.2019",
        isConfirmed: false
      },
      {
        commentId: 103,
        postId: 41,
        userId: 16,
        comment: "This article has been really helpful.",
        commentCreationDate: "7.05.2021",
        isConfirmed: false
      },
      {
        commentId: 37,
        postId: 53,
        userId: 16,
        comment: "I enjoyed reading this post. Thanks for sharing.",
        commentCreationDate: "12.12.2022",
        isConfirmed: true
      },
      {
        commentId: 119,
        postId: 58,
        userId: 16,
        comment: "I have a different perspective on this subject.",
        commentCreationDate: "20.02.2021",
        isConfirmed: false
      },
      {
        commentId: 4,
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


