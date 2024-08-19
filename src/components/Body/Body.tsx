import * as React from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { ReposInterfaceMin } from '../../models/models';
import RightBloc from '../RightBloc/RightBloc';

interface BodyProps {
  data: ReposInterfaceMin[] | null;
  isLoading?: boolean;
}

const MyDataGrid: React.FC<BodyProps> = ({data, isLoading}) => {

  const [rows, setRows] = React.useState<ReposInterfaceMin[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<ReposInterfaceMin | null>(null); 

  React.useEffect(() => {
    if (data) {
      setRows(
        data.map((item) => ({
          id: item.id, 
          name: item.name,
          language: item.language || '',
          forks: item.forks,
          stargazers_count: item.stargazers_count,
          updated_at: item.updated_at,
			 description: item.description,
			 topics: item.topics,
			 license: item.license,
        }))
      );
    }
  }, [data]);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Название', type: 'string', width: 250, headerAlign: 'left', },
    { field: 'language', headerName: 'Язык', type: 'string', width: 250, headerAlign: 'left', },
    { field: 'forks', headerName: 'Число форков', type: 'number', width: 250, headerAlign: 'left', },
    { field: 'stargazers_count', headerName: 'Число звезд', type: 'number', width: 250, headerAlign: 'left', },
    { field: 'updated_at', headerName: 'Дата обновления', type: 'string', width: 250, headerAlign: 'left', },
  ];
 
  const handleRowClick = (params: GridRowParams<ReposInterfaceMin>) => {
	setSelectedRow(params.row); 
 };

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
	<main>
        <div className="myDataGrid__container" style={{ width: '100%', padding: '0px 0px 0px 0px', display: 'flex',  }}>
				{data && (<>
			<div className="myDataGrid__leftContent" style={{width: '100%', padding: '32px 16px 0px 24px'}}>
				<h1 style={{ fontSize: '48px', lineHeight: '56px', marginBottom: '24px' }}>Результаты поиска</h1>
				<div style={{ height: '78vh' }}>
					<DataGrid
					pagination
					rows={rows}
					columns={columns}
					initialState={{
						pagination: { paginationModel: { pageSize: 5 } },
					}}
					pageSizeOptions={[5, 10, 25]}
					onRowClick={handleRowClick} 
					sx={{
						border: 0,
						'& .MuiDataGrid-cell': { 
							textAlign: 'left',
						},
						'& .MuiDataGrid-footerContainer': {
							borderTop: 0
						}
					}}
					/>
				</div>
			</div>
			<div className="myDataGrid__rightContent" style={{alignSelf: 'stretch'}}>
				<RightBloc selectedRow={selectedRow} />
			</div>
				</>)}
				{!data && (<div 
				className="myDataGrid__noData"
				style={{
					width: '100%',
					height: '78vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '46px',
					lineHeight: '65.7px',
					letterSpacing: '0.17px'
				}}
				>Добро пожаловать</div>)}
        </div>
    </main>
  );
};

export default MyDataGrid;
