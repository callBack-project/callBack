// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  position: string;
  company: string;
  bio: string;
  skills: string;
  picture: string;
};

export type Company = {
  id: number;
  name: string;
  description: string;
  industry: string;
  size: string[];
  location: string;
  algos: string;
};

export type Event = {
  id: number;
  name: string;
  location: string;
  date: Date;
  description: string;
  link: string;
  likes: number;
};

export type InterviewExperience = {
  id: number;
  position: string;
  company: string;
  info: string;
  offer: boolean;
  interviewDate: Date;
  rounds: number;
  likes: number;
};

export type InterviewReply = {
  id: number;
  reply: string;
  likes: number;
};

export type Job = {
  id: number;
  position: string;
  company: string;
  link: string;
  description: string;
  isActive: boolean;
  level: string;
  location: string;
  remote: boolean;
};

export type JobReply = {
  id: number;
  reply: string;
  likes: number;
};
