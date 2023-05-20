import { render, screen, waitFor } from "@testing-library/react";
import RepoCard from "./RepoCard";
import { MemoryRouter} from 'react-router-dom';
import { Repo } from "../../types/user";

const mockOrganizations: Repo = 
  { id: 1, name: 'follower1', html_url: 'google.com',created_at: 'fb.com', updated_at: 'fb.com' }

describe('Verify that Organization card is working properly', () => {
  test("Verify that OrgCard should have relevant title.", async () => {
    render(
      <MemoryRouter>
        <RepoCard repoData={mockOrganizations} />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByText("follower1")).toBeInTheDocument()
    );
  });
});