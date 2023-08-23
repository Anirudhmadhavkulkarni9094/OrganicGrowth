import DepartmentListComponent from './DepartmentComponent'
import SecondPage from './SecondPage'
import '../assets/Content.css'
import { Grid } from '@mui/material'

type Props = {}

function Content({}: Props) {
  return (
    <div className='Content'>
        
        <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
                <DepartmentListComponent/>
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
                <SecondPage/>
            </Grid>
        </Grid>
    </div>
  )
}

export default Content