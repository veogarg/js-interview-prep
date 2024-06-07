import Carousel from "./screens/Carousel";
import Counter from "./screens/Counter";
import InfiniteScoll from "./screens/InfiniteScroll";
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
]

export default routes;
