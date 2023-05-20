import { render, screen, waitFor } from "@testing-library/react";
import FollowerCard from "./FollowerCard";
import { MemoryRouter} from 'react-router-dom';
// import axios from 'axios';
import { Follower } from "../../types/user";

const mockFollowers: Follower = 
  { id: 1, login: 'follower1', avatar_url: 'google.com', html_url: 'fb.com' }

describe('Verify that follower card is working properly', () => {
  test("Verify that Header should have relevant title.", async () => {
    render(<MemoryRouter><FollowerCard followerData={mockFollowers} /></MemoryRouter>); await waitFor(() => expect(screen.getByText("Follower ID:")).toBeInTheDocument());
  });
});