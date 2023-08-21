import DepartmentListComponent from './DepartmentComponent'
import SecondPage from './SecondPage'
import '../assets/Content.css'

type Props = {}

function Content({}: Props) {
  return (
    <div className='Content'>
        <DepartmentListComponent/>
        <SecondPage/>
    </div>
  )
}

export default Content