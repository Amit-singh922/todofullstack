// import AddTodo from './AddTodo.tsx'
import VideoList from './VideoList.tsx'
import VideoForm from './VideoForm.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Videos</h1>
        <VideoList />
        <VideoForm/>
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
