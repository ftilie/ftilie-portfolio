window.global ||= window;
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "~/index.css";
import App from "~/App";
import reportWebVitals from "./reportWebVitals";

// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             refetchOnWindowFocus: false,
//         },
//     },
// });

ReactDOM.render(
    <StrictMode>
            {/* <QueryClientProvider client={queryClient}> */}
            {/* <ReactQueryDevtools /> */}
            <App />
            {/* </QueryClientProvider> */}
    </StrictMode>,

    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
