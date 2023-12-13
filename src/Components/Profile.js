import "../css/Profile.css";


function Profile(props) {
    //hàm properties (viết tắt: props) => truy xuất ra nhiều thông tin với 1 tên biến
    console.log(props);

    const { name, age } = props;

    console.log(name);
    console.log(age);

    return (
        <div className="title">
            <div>Ten: {name}</div>
            <div>Tuoi: {age}</div>
        </div>
    )
}

export default Profile;
