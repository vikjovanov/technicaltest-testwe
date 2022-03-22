const RetryButton = (props) => {
    const { retryFct } = props;

    return (
        <div>
            <p>Une erreur s'est produite</p>
            <button onClick={retryFct}>Ré-essayer</button>
        </div>
    );
};

export default RetryButton;
