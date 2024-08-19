import { AppBar, Button, TextField, Toolbar, styled } from '@mui/material';
import React from 'react';
import { useSearchReposQuery } from '../../store/github/github.api';
import { ReposInterface } from '../../models/models';

const StyledTextField = styled(TextField)(() => ({
  maxWidth: 912,
  width: '60%',
  height: 42,
  backgroundColor: 'rgba(242, 242, 242, 1)',
  borderRadius: 4,
  marginRight: 8,
  '& .MuiInputLabel-root': {
	color: 'rgba(130, 130, 130, 1)',
	letterSpacing: 0.17,
	top: 2,
 },
  '& .MuiInputBase-root': {
	height: '100%'
  },
  '& .MuiInputBase-input': {
    fontSize: '14px',
    lineHeight: '24px',
	 border: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const StyledButton = styled(Button)(() => ({
	fontSize: '15px',
	width: '105px',
	height: '42px',
	fontWeight: 500,
	background: 'rgba(33, 150, 243, 1)'
 }));

 interface HeaderProps {
  setData: (query: ReposInterface[] | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({setData, setIsLoading}) => {
	const [value, setValue] = React.useState('');
	const [repos, setRepos] = React.useState('')
	const { data, isLoading} = useSearchReposQuery(repos, {
		skip: repos.length < 1,
	});

	React.useEffect(() => {
		if (data) {
			setData(data);
		}
	}, [data]);
	React.useEffect(() => {
		setIsLoading(isLoading);
	}, [isLoading]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onClick = () => {
		setRepos(value);
	};
	
  return (
    <AppBar position='static' sx={{height: 80, display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(0, 131, 143, 1)', boxShadow: 0,}}>
      <Toolbar>
        <StyledTextField id="outlined-search" label="Введите название компании, например 'Google'" type="search" size='small' value={value} onChange={handleSearch} />
        <StyledButton variant="contained" size='large' onClick={onClick}>Искать</StyledButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

