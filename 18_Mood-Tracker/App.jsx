import React from 'react';
import ReactDOM from 'react-dom/client'
import diaryData from "./diaryData"
import DiaryCard from "./components/DiaryCard"
import Menu from "./components/Menu"

export default function App() {
    
/* Challenge 

Two DiaryCard components are currently hardcoded with data below. Your task is to use the power of iteration to automatically create DiaryCard components for all 14 days of data in diaryData.js. 

    1. Both of the hardcoded DiaryCard components should be deleted and replaced with a total of 14 
       automatically-created components. 
    
    2. The first two cards should look identical to the original hardcoded cards, and the rest of 
       the cards should look similar. 
        
    3. Make the code concise. 
*/
    
    return (
        <div>
            <Menu skip={false}/>
            <main className="main-container">
                <div className="sub-header">
                    <h3>April Reports</h3>
                </div>
                
                <DiaryCard
                    key="this is a temporary key"
                    date="April 1"
                    rating={77}
                    emotions={[
                        { icon: "😊", text: "Satisifed" },
                        { icon: "☺️", text: "Relaxed" },
                        { icon: "🙏", text: "Grateful" },
                        { icon: "️️️⚡️", text: "Energetic" }
                    ]}
                    activities={[
                        { icon: "🏃‍♂️", text: "Running" },
                        { icon: "️️️🧘‍♂️", text: "Meditation" },
                        { icon: "️✍️", text: "Journaling" },
                        { icon: "️📖", text: "Reading" },
                        { icon: "️👨‍👩‍👦‍👦", text: "Family Time" }
                    ]}
                    note={`Nothing very exciting happened, but today was a pretty nice day! I had a nice balance of "me time" and family time, and I felt very relaxed and satisfied by the time I went to bed.`}
                    />
                    
                <DiaryCard
                    key="this is just another temporary key"
                    date="April 2"
                    rating={96}
                    emotions={[
                        { icon: "😇", text: "Proud" },
                        { icon: "🥰", text: "Appreciated" },
                        { icon: "😃", text: "Joyful" },
                        { icon: "️🥳", text: "Celebratory" }
                    ]}
                    activities={[
                        { icon: "🏆", text: "Personal Victory" },
                        { icon: "️️️💪", text: "Personal Growth" },
                        { icon: "️🍛", text: "Good Meal" },
                        { icon: "️🛌", text: "Good Sleep" },
                        { icon: "️👨‍👩‍👦‍👦", text: "Family Time" }
                    ]}
                    note={`"I finally finished my big work project that I've been working on for the past three months, and I feel like I've really improved myself as a member of my team."`}
                    />

            </main>
        </div>
    )
}