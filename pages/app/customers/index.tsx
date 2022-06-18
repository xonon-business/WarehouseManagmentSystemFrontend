import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Header from '../../../components/Header'
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
// import { CheckRoute } from 'utils/router'
import LoadingScreen from 'components/LoadingScreen'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    // { field: 'email', headerName: 'Email', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 255,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''}${params.row.lastName || ''}@gmail.com`,
    },
];

const rows = [
    { id: '#1', lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: "#2", lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: '#3', lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: '#4', lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: '#5', lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: '#6', lastName: 'Melisandre', firstName: null, age: 150 },
    { id: '#7', lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: '#8', lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: '#9', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Warehouse() {
    let router = useRouter()
    let cookie = Cookie.get(`authKey`);
    let [loading, setLoading] = useState(false)
    useEffect(() => {
        if (cookie == undefined) {
            router.push(`/auth/login`, undefined, { shallow: true })
        }
    }, [router, cookie])
    // router.events.on('routeChangeStart', () => setLoading(true));
    // router.events.on('routeChangeComplete', () => setLoading(false));
    // router.events.on('routeChangeError', () => setLoading(false));
    return (
        <>
            <LoadingScreen open={loading} />
            <Header
                pageDescription='this is the dashboard'
                pageTitle='Dashboard - Customers'
                pageName='Dashboard - Customers'
                auth={cookie}
            >
                <DataGrid style={{ height: 400, width: '100%' }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Header>
        </>
    )
}
