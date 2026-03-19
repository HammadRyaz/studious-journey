import { createContext, useContext, useState } from "react";
import { useMouse } from "./UseMouse";

const TabsCtx = createContext();

export function Tabs({ children, defaultTab = 0 }) {
    const [selectedTab, setSelectedTab] = useState(defaultTab);

    return (
        <TabsCtx.Provider value={{ selectedTab, setSelectedTab }}>
            {children}
        </TabsCtx.Provider>
    );
}

export function TabList({ children }) {
    return <div className="m-2 flex w-full justify-around gap-1">{children}</div>;
}

export function Tab({ children, index }) {
    const { selectedTab, setSelectedTab } = useContext(TabsCtx);
    return (
        <button className="btn btn-sm" onClick={() => setSelectedTab(index)}>
            {children}
        </button>
    );
}

export function TabPanel({ index, children, className }) {
    const { selectedTab } = useContext(TabsCtx);
    return index === selectedTab ? (
        <div
            className={`card m-2 h-50 w-full bg-mist-200 text-center text-2xl ${className}`}
        >
            {children}
        </div>
    ) : null;
}

export function Tabs_APP_HookContext() {
    const { x, y } = useMouse();
    return (
        <div className="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2">
            <Tabs>
                <TabList>
                    <Tab index={0}>Coordinate</Tab>
                    <Tab index={1}>Emoji Follower</Tab>
                    <Tab index={2}>Progress Bar</Tab>
                </TabList>
                <TabPanel index={0} className="font-mono text-3xl">
                    x : <span className="text-blue-800">{x}</span> - y :
                    <span className="text-blue-800">{y}</span>
                </TabPanel>
                <TabPanel index={1}>
                    <div style={{ position: "absolute", left: -70 + x, top: y }}>😠</div>
                </TabPanel>
                <TabPanel index={2}>
                    <div style={{ backgroundColor: "lime", width: x, height: "150px", overflow: "hidden", maxWidth: "280px" }}>

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}
