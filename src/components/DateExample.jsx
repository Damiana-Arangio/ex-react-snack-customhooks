import useDate from '../hooks/useDate'

function DateExample() {
    const currentDate = useDate();

    return (
        <div>
            <h1>Data e ora attuali:</h1>
            <p>{currentDate.toLocaleString()}</p>
        </div>
    );
}

export default DateExample;