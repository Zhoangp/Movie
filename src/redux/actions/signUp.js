import axios from "axios";

export const register = async (values, callBack) => {
        try {
                await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                method: "POST",
                data: values,
            })
            console.log(values);
            alert("Đăng ký thành công!");
            callBack();
        }
        catch(error) {
            alert("Thất bại!");
        }
    }
