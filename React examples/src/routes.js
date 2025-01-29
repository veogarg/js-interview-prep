import Carousel from "./screens/Carousel";
import Counter from "./screens/Counter";
import InfiniteScoll from "./screens/InfiniteScroll";
import OTP from "./screens/OTP";
import SearchingInput from "./screens/Searching";
import SnakeNLadder from "./screens/Snake-N-Ladder";
import Theme from "./screens/ThemeContext";
import TicTacToe from "./screens/TicTacToe";
import TrafficSignal from "./screens/TrafficLight";
import TypingTest from "./screens/TypingTest";

const routes = [
    {
        id: "traffic-signal",
        label: "Traffic Signal",
        path: "/traffic-signal",
        component: (props) => <TrafficSignal {...props}/>,
    },
    {
        id: "counter",
        label: "Counter",
        path: "/counter",
        component: (props) => <Counter {...props}/>,
    },
    {
        id: "infiniteScroll",
        label: "Infinite Scroll",
        path: "/infinte-scroll",
        component: (props) => <InfiniteScoll {...props}/>,
    },
    {
        id: "ticTacToe",
        label: "Tic-Tac-Toe Game",
        path: "/tic-tac-toe",
        component: (props) => <TicTacToe {...props} />
    },
    {
        id: "carousel",
        label: "Carousel",
        path: "/carousel",
        component: (props) => <Carousel {...props} />
    },
    {
        id: "typingTest",
        label: "Typing Test",
        path: "/typing-test",
        component: (props) => <TypingTest {...props} />
    },
    {
        id: "searchUsers",
        label: "Search Users",
        path: "/search-users",
        component: (props) => <SearchingInput {...props} />
    },
    {
        id: "themContext",
        label: "Theme Context",
        path: "/theme-context",
        component: (props) => <Theme {...props} />
    },
    {
        id: "otp",
        label: "OTP",
        path: "/otp",
        component: (props) => <OTP {...props} />
    },
    {
        id: "snakeNLadder",
        label: "Snake-N-Ladder",
        path: "/snake-n-ladder",
        component: (props) => <SnakeNLadder {...props} />
    },
]

export default routes;
