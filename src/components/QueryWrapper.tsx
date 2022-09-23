import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryWrapper: React.FC = (props) => (
  <QueryClientProvider client={queryClient} {...props} />
);

export default QueryWrapper;
