"use client"
import Gallery from "./components/01-chapter/Profile";
import TaskApp from './chapter-03/01_useReducer/TaskApp'


export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      {/* <div onClickCapture={() => {
        alert('onClickCapture')
      }}>
        <button onClick={(e) => {
          // e.stopPropagation()
          alert('click button')
        }}>button 1</button>
        <br />
        <button>button 2</button>
      </div> */}

      {/* <form onSubmit={(e) => {
        e.preventDefault();
        alert('提交表单！')
      }}>
        <input />
        <button>发送</button>
      </form> */}


      {/* chapter-03 */}
      <TaskApp />
    </div>
  );
}
