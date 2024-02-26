import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  marginRight: '6px',
  borderColor: '#36d7b7',
};

export const Spiner = ({ loading, size }) => {
  return (
    <ClipLoader
      color="#36d7b7"
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
