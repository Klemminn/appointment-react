import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryWrapper: React.FC = (props) => (
  <QueryClientProvider client={queryClient} {...props} />
);
