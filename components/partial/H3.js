export default function H4(props) {
    const { text, classes } = props;

    return (
        <h3 className={`underline ${classes}`}>{text}</h3>
    )
};