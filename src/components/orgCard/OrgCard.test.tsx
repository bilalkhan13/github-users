import { render, screen, waitFor } from "@testing-library/react";
import OrgCard from "./OrgCard";
import { MemoryRouter} from 'react-router-dom';
import { Organization } from "../../types/user";

const mockOrganizations: Organization = 
  { id: 1, login: 'follower1', avatar_url: 'google.com',repos_url: 'fb.com', url: 'fb.com' }

describe('Verify that Organization card is working properly', () => {
  test("Verify that OrgCard should have relevant title.", async () => {
    render(
      <MemoryRouter>
        <OrgCard orgData={mockOrganizations} />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByText("follower1")).toBeInTheDocument()
    );
  });
});