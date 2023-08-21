import { useState } from 'react';
import { Paper, List, ListItem, ListItemText, Collapse, ListItemIcon, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import '../assets/Content.css'

interface Department {
  department: string;
  sub_departments: string[];
}

const departmentData: Department[] =  [
  {
    "department": "customer_service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "department": "design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
  {
    "department": "engineering",
    "sub_departments": [
      "software",
      "hardware",
      "quality_assurance"
    ]
  },
  {
    "department": "marketing",
    "sub_departments": [
      "social_media",
      "content_creation",
      "branding"
    ]
  },
  {
    "department": "sales",
    "sub_departments": [
      "inbound_sales",
      "outbound_sales"
    ]
  },
  {
    "department": "finance",
    "sub_departments": [
      "accounting",
      "budgeting",
      "auditing"
    ]
  }
];

function DepartmentListComponent() {
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleToggleDepartment = (department: string) => {
    setOpenDepartments(prevOpenDepartments => {
      if (prevOpenDepartments.includes(department)) {
        return prevOpenDepartments.filter(dep => dep !== department);
      } else {
        return [...prevOpenDepartments, department];
      }
    });
  };

  const handleToggleSelection = (item: string) => {
    setSelectedDepartments(prevSelectedDepartments => {
      if (prevSelectedDepartments.includes(item)) {
        return prevSelectedDepartments.filter(dep => dep !== item);
      } else {
        return [...prevSelectedDepartments, item];
      }
    });
  };

  const handleToggleDepartmentWithSubs = (department: string, subDepartments: string[]) => {
    setSelectedDepartments(prevSelectedDepartments => {
      if (prevSelectedDepartments.includes(department)) {
        return prevSelectedDepartments.filter(dep => dep !== department && !subDepartments.includes(dep));
      } else {
        return [...prevSelectedDepartments, department, ...subDepartments];
      }
    });
  };

  const handleExpandToggle = (department: string) => {
    if (selectedDepartments.includes(department)) {
      setOpenDepartments([...openDepartments, department]);
    }
  };

  return (
    <Paper style={{ padding: '10px', width: '250px', height: '100vh' }}>
      <List>
        {departmentData.map((dept) => (
          <div key={dept.department}>
            <ListItem
              button
              onClick={() => handleToggleDepartment(dept.department)}
              onDoubleClick={() => handleExpandToggle(dept.department)}
            >
              <ListItemIcon>
                {openDepartments.includes(dept.department) ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary={dept.department} />
              <Checkbox
                checked={selectedDepartments.includes(dept.department)}
                onChange={() => handleToggleDepartmentWithSubs(dept.department, dept.sub_departments)}
              />
            </ListItem>
            <Collapse in={openDepartments.includes(dept.department)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {dept.sub_departments.map((subDept) => (
                  <ListItem key={subDept} style={{ paddingLeft: '20px' }}>
                    <ListItemText primary={subDept} />
                    <Checkbox
                      checked={selectedDepartments.includes(subDept)}
                      onChange={() => handleToggleSelection(subDept)}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default DepartmentListComponent;
