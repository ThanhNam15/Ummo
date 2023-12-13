function Profile(props) {
    //hàm properties (viết tắt: props) => truy xuất ra nhiều thông tin với 1 tên biến
    console.log(props);
    return (
        <div>
            <div>Ten: {props.name}</div>
            <div>Tuoi: {props.age}</div>
        </div>
    )
}

export default Profile;
