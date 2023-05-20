import { render, screen, waitFor} from "@testing-library/react";
import Header from "./Header";

describe('Verify that header is working properly.',()=>{
  test("Verify that Header should have relevant title.", async () => {
    render(<Header />); await waitFor(() => screen);
    const divElement = screen.getByText(/Github Users/i);
    expect(divElement).toBeInTheDocument();
  });
})
