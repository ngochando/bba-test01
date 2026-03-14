# 📚 LESSON 04 - KEY TAKE NOTE - DAY 09/03/2026 & 13/03/2026

## JavaScript Basic - Continue

### ✅ OBJECT

#### WHAT - Object là gì?

> Là kiểu dữ liệu được lưu trữ dưới dạng cặp ```key: value```

#### WHY - Tại sao cần phải dùng Object?

Tạo hồ sơ lưu trữ thông tin của 1 học sinh

- Khi không dùng Object:

```
let name = "Ngoc Han";
let age = 18;
let className = "Playwright K22";
```

=> 3 biến rời rạc khó quản lý

- Khi dùng Object:
```
let student = {
    name: "Ngoc Han";
    age: 18;
    className: "Playwright K22";
}
```
=> Gom gọn tất cả các thông tin vào **1 biến duy nhất**, **ưu điểm dễ quản lý**, **dễ truy xuất** và **dễ truyền đi khi cần dùng**

> **⭐️ Key Note:** **Object** có thể tưởng tượng như 1 record, bên trong có nhiều mục khác nhau được lưu trữ dưới dạng từng cặp **key** và **value**
---

#### HOW - Cách Khai Báo Object?

> Có 2 cách để khai báo Object:

**Cách 1: Object Literal (phổ biến nhất)** => được sử dụng nhiều nhất trong thực tế
```
let student = {
    name: "Ngoc Han",
    age: 18,
    className: "Playwright K22"
}
```

**Cách 2: Dùng new Object()**
```
let student = new Object();
student.name = "Ngoc Han"; 
student.age = 18;
student.className = "Playwright K22";
```

##### Convention - Quy tắc đặt tên Key

- Key thường có kiểu dữ liệu là **String**

- Nếu tên key **không có ký tự đặc biệt, khoảng trắng** -> không cần phải đặt trong cặp nháy kép
    - Ví dụ: 
    ```
    name: "Ngoc Han";
    ```
- Nếu tên key **có ký tự đặc biệt, khoảng trắng** -> bắt buộc phải đặt trong cặp nháy kép 
    - - Ví dụ: 
    ```
    "full name": "Ngoc Han";
    ```

#### HOW - Cách Truy Xuất Dữ Liệu Trong Object

**Cách 1: Dot notation (dấu chấm) - Phổ biến**
```
let student = {
    name: "Ngoc Han",
    age: 18,
    className: "Playwright K22",
}
```
Lấy ra value của name, age
```
console.log(student.name); => "Ngoc Han"
console.log(student.age); => 18
```

**Cách 2: Bracket notation (Dấu ngoặc vuông)**
```
let student = {
    "full name": "Ngoc Han",
    age: 18,
    "class name": "Playwright K22"
}
```
Lấy ra value của full name, class name
```
console.log(student["full name"]); => "Ngoc Han"
console.log(student["class name"]); => 18
```

Khi nào thì **bắt buộc** phải dùng Bracket Notation
- Key có dấu cách hoặc ký tự đặc biệt
- Key là biến

Ví dụ:
```
const user = {
  "user name": "Nguyen Van A", // Có khoảng trắng
  100: "Điểm tối đa"          // Bắt đầu bằng số
};

// Dùng biến (động)
const key = "user name";
console.log(user[key]); 
```

#### HOW - Gán giá trị cho Object
```
let student = {
    "full name": "Ngoc Han",
    age: 18,
    "class name": "Playwright K22"
}

//Update giá trị => key đã có
student.age = 20;
student["full name"] = "Ngoc Han 123";

//Add thêm key mới => key chưa tồn tại, auto tạo mới
student.email = "Han@gmail.com";
student["middle name"] = "Phung";
```

#### HOW - Thêm, Sửa, Xoá Thuộc Tính
```
let student = {
    "full name": "Ngoc Han",
    age: 18,
    "class name": "Playwright K22"
}
```
**Thêm**
```
student.email = "Han@gmail.com"; // thêm bằng dot
student["middle name"] = "Phung"; // thêm bằng bracket
```
**Sửa**
```
student.age = 20;
```
**Xoá** -> delete chỉ xoá property ra khỏi Object chứ không xoá biến
```
delete student.email; // xoá bằng dot
delete student["class name"]; // xoá bằng bracket
```

#### Object Lồng Nhau (Nested Object)

Value của 1 Key có thể là bất kì 1 loại dữ liệu nào, kể cả là 1 **Object khác**

```
let sinhVien = {
    hoTen: "Minh",
    tuoi: 21,
    diaChi: {
        soNha: "12",
        duong: "Lê Lợi",
        thanhPho: "Hồ Chí Minh"
    }
};
```
Cách truy xuất Object lồng nhau:
```
console.log(sinhVien.diaChi.soNha);
console.log(sinhVien["diaChi"]["soNha"])
```
---
**Summary**
|Action|Syntax|Example|
|---|---|---|
|Khai báo|```{}``` hoặc ```new Object()```|```let obj = {a: 1}``` hoặc ```let obj = new Object()```|
|Truy xuất|.key hoặc ["key"]|```obj.a``` hoặc ```obj["a"]```|
|Thêm/Sửa|```obj.key = value```|```obj.a = 2```|
|Lồng nhau|value là **Object**|```obj.x.y.z```|

### ✅ ARRAY

#### WHAT - Array là gì?

> Là kiểu dữ liệu dùng để lưu trữ **1 danh sách có thứ tự**

#### WHY - Tại sao lại cần dùng Array?

- Nếu **không dùng** Array:

Ví dụ:
```
let mon1 = "Toán";
let mon2 = "Lý";
let mon3 = "Hoá";
let mon4 = "Anh";
let mon5 = "Tin";
```
-> 5 biến rời rạc. Nếu có nhiều môn hơn thì không quản lý được

- Nếu **dùng** Array:

Ví dụ:
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
```
-> 1 biến duy nhất chứa toàn bộ danh sách, dễ quản lý, dễ duyệt qua

> Array giống như là 1 danh sách được đánh số - mỗi phần tử đều có index tương ứng, bắt đầu từ 0

![alt text](image.png)

#### HOW - Cách khai báo Array

**Cách 1: Array Literal**
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
```

**Cách 2: Dùng new Array()**
```
let monHoc = new Array("Toán", "Lý", "Hoá", "Anh", "Tin");
```

**Note**:
- Array có thể chứa nhiều kiểu dữ liệu khác nhau
- Tuy nhiên trong thực tế trong 1 danh sách nên giữ các phần tử cùng kiểu để dễ xử lý

#### HOW - Truy xuất dữ liệu trong Array

- Lấy phần tử theo index
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
//lấy phần từ cuối cùng
monHoc[4];
//lấy phần tử đầu tiên
monHoc[0];
//lấy phần từ không tồn tại
monHoc[5] => undefined
```
- Đếm số phần từ -> dùng ```length```
```
monHoc.length => output: 5
```
- Gán lại giá trị theo index
```
monHoc[1] = "Vật lý";
```

#### HOW - Thêm, Xoá phần tử

- Thêm vào cuối -> ```.push()```
- Xoá phần tử cuối -> ```.pop()```
- Thêm vào đầu -> ```.unshift()```
- Xoá phần tử đầu -> ```.shift()```

#### Kết hợp Array với For loop
> Giúp xử lý hàng loạt dữ liệu

Ví dụ:
```
//Tính tổng các số trong array
const arr = [8, 9, 7, 10, 14];

let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log(sum)
```

### ✅ FUNCTION

#### WHAT - Function là gì?
> Là 1 khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code

#### WHY - Tại sao cần dùng Function?
> Những thao tác, code cần dùng đi dùng lại ở nhiều chỗ khác nhau trong chương trình -> nếu cần sửa thì sẽ phải sửa 1 lúc nhiều chỗ. **Dễ sót, dễ sai**.

**Function có thể giải quyết vấn đề** 
- Khai báo 1 lần, dùng nhiều lần
- Khi cần chỉ cần sửa 1 chỗ duy nhất

Tưởng tượng function giống như công thức nấu ăn, khi đã có công thức thì áp dụng vào nấu bao nhiêu lần cũng được

#### HOW - Cách khai báo Function

```
function tenHam() {
    //code ...
}
```

- **function**: từ khoá bắt buộc
- **tenHam**: tên hàm cho mình tự đặt
- **{}**: body của hàm, bên trong chứa code sẽ thực thi

#### HOW - Quy tắc đặt tên Function

- Dùng **camelCase** 
- Nên bắt đầu bằng **Động từ**
- Tên phải **diễn tả được hành động** mà fucntion thực hiện bên trong

> **Lưu ý:* Hàm chỉ chạy khi bạn gọi nó
```
Gọi hàm = tên hàm + dấu ()
```

#### WHAT - Function with Parameter

**Parameter** là tham số truyền vào khi gọi hàm 

##### Phân biệt Parameter(tham số) và Agrument(đối số)

```
// Parameter(tham số) -> biến giữ chỗ khi khai báo function 
    function chao(ten){
        console.log("Xin chào" + ten + "!");
    }

// Agrument(đối số) -> giá trị thật khi call function
    chao("Lan"); -> "Lan" chính là đối số
```
**Một function có thể có nhiều Parameter**

- Khi truyền các đối số vào cần truyền theo thứ tự parameter tương ứng đã khai báo ở function trước đó
- Nếu không truyền vào đối số thì output của tham số ra sẽ là ```undefined```

#### WHAT - Fucntion có giá trị trả về: RETURN

> Ngoài làm gì đó, function còn có thể return kết quả để dùng tiếp 

- **Không có return** -> chỉ ___làm___
- **Có return** -> làm xong ___"trả kết quả"___

> **Note:** ```return``` sẽ dừng hàm ngay lập tức

### Phạm vi của Biến

#### WHAT - Phạm vi của biến là gì?
> **Phạm vi (scope)** -> xác định phạm vi nơi mà biến có thể truy cập được

**Có 3 loại scope:**
- **Block scope (khối)**
    - Biến được khai báo bên trong cặp ngoặc nhọn ```{...}```
        - ```var``` -> global nên không bị giới hạn bởi cặp ngoặc nhọn

        - ```let/const``` -> bị ***giới hạn bởi cặp ngoặc nhọn***, nếu truy cập bên ngoài sẽ trả về ***undefined***

        Ví dụ: 
        ```
        if (true) {
            var a = 1;
            let b = 2;
            const c = 3;
        }
        
        console.log(a); // output: 1
        console.log(b); // output: error: b is not defined
        console.log(c); // output: error: c is not defined
        ```

- **Function scope (hàm)**
    - Biến được khai báo bên trong 1 hàm
        - ```let/var/const``` ***ra bên ngoài hàm*** đều bị ***undefined***

        Ví dụ:
        ```
        function print () {
            var funcScope = "only access in this function";
            let alsoFuncScope = "only access in this function too";

            console.log(funcScope); //output: only access in this function
            console.log(alsoFuncScope); //output: only access in this function too
        }

        console.log(funcScope); //output: funcScope is not defined
        console.log(alsoFuncScope); //output: alsoFuncScope is not defined

        ```
- **Toàn cục (global)**
    - Biến được khai báo ở 1 line code tự do không nằm bên trong bất kì **khối** hay **hàm** nào

        Ví dụ:
        ```
        var globalVar = 1;
        var globalLet = 2;

        function print (){
            console.log(globalVar); //output: 1
            console.log(globalLet) //output: 2
        }
        ```

### Break & Continue

#### Break

##### WHAT - Break là gì?

> **break** dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức

Ví dụ:
```
//Dừng vòng lặp khi i lớn hơn 7
for (let i = 0 ; i <10 ; i++){
    if (i > 7){
        break;
    }

    console.log(i);
}
```
> Output: 
```
0
1
2
3
4
5
6
7
```

##### WHAT - Continue là gì?

> **continue** dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo

Ví dụ:

```
//Chỉ in ra các số chẵn và bỏ qua các số lẻ
for (let i =0 ; i < 10 ; i++){
    if (i % 2 !== 0){
        continue;
    }

    console.log(i)
}
```

> Output: 
```
1
3
5
7
9
```

### Câu Điều Kiện Nâng Cao

#### If...else statement

> Thực thi 2 nhánh code khác nhau cho 2 điều kiện true và false

Ví dụ:
```
const num = 8;

if (num % 2 === 0){
    console.log("Đây là số chẵn"); 
} else {
    console.log("Đây là số lẻ");
}
```

> Output: Đây là số chẵn

#### Ternary Operator

> **Toán tử điều kiện (ba ngôi):** cách viết ngắn gọn của if...else đơn giản

Syntax:
```
<condition> ? value of true : value of false
```

- ```condition```: điều kiện cần kiểm tra
- ```?```: nếu điều kiện đúng
- ```value of true```: giá trị trả ra khi điều kiện đúng
- ```:```: ngược lại
- ```value of false```: giá trị trả ra khi điều kiện sai

Ví dụ:
- Dùng **if...else** bình thường
```
if (num % 2 === 0){
    console.log("Đây là số chẵn"); 
} else {
    console.log("Đây là số lẻ");
}
```
- Dùng **toán từ ba ngôi**
```
let checkNum = num % 2 ? "Đây là số chẵn" : "Đây là số lẻ";
```

Note: chỉ dùng ternary operator khi điều kiện cần check đơn giản, phức tạp thì ưu tiên dùng if...else bình thường

### Vòng Lặp Nâng Cao

#### For..in Loop
> Dùng để duyệt qua các thuộc tính (properies) của một Object

Ví dụ:
```
let person = {
    name = "Ngoc Han",
    age = 20,
    grade = "Playwright K22"
}

for (key in person){
    console.log(key);
    console.log(person[key]);
}
```

> Output:
```
name
age
grade
Ngoc Han
10
Playwright K22
```

**Note:** có thể dùng for...in để duyệt qua các phần từ trong Array nhưng không khuyến khích

```
const arr = [a, b, c];

for (let index in arr){
    console.log(index);
    console.log(arr[index]);
}
```

> Output:
```
0
1
2
a
b
c
```

#### forEach method

> Method của Array để thực thi function với mỗi phần tử của Array. Lưu ý: không thể dùng **break** hoặc **continue**

Ví dụ:
```
const nums = [1, 2, 3, 4, 5];

let sum = 0;
nums.forEach(item => {
    sum += item;
});

console.log(sum) // output: 15
```