import './App.css'
import ComboBox from './components/ComboBox/ComboBox'
import { Input } from './components/Form/Input'

function App() {

  return (
    <main className='container flex flex-col gap-4 py-4 px-72'>
      <ComboBox options={[]} name="test" />
      <Input name="username" />
    </main>
  )
}

export default App
