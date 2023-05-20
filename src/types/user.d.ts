
export interface User {
  id: number;
  login: string;
  avatar_url: string;
}
export interface UserDetails {
  login: string,
  id: number,
  node_id: "MDQ6VXNlcjM2",
  avatar_url: "https://avatars.githubusercontent.com/u/36?v=4",
  followers_url: "https://api.github.com/users/KirinDave/followers",
  name: string,
  public_repos: number,
  followers: number,
  created_at: string,
  updated_at: string
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  created_at: string;
  updated_at: string
}

export interface Follower {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string
}

export interface Organization {
  id: number;
  login: string;
  url: string;
  repos_url: string;
  avatar_url: string
}
