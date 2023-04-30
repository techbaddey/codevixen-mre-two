const StatusStyle = styled.div`
  background-color: ${props => {
    switch (props.status) {
      case 'success':
        return 'green';
      case 'warning':
        return 'yellow';
      case 'error':
        return 'red';
      default:
        return 'white';
    }
  }};
`;