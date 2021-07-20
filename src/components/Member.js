const Member = (props) => {
    const { name, email, role } = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    )
}

export default Member;