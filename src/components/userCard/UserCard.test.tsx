import { render, screen, waitFor } from "@testing-library/react";
import UserCard from "./UserCard";
import { MemoryRouter} from 'react-router-dom';
import {User } from "../../types/user";

const mockOrganizations: User = 
  { id: 1, login: 'follower1', avatar_url: 'google.com'}

describe('Verify that Organization card is working properly', () => {
  test("Verify that OrgCard should have relevant title.", async () => {
    render(
      <MemoryRouter>
        <UserCard userData={mockOrganizations} />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByText("follower1")).toBeInTheDocument()
    );
  });
});