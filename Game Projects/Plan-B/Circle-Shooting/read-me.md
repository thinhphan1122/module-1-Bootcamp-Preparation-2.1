Một vài điểm cần fix và lưu ý:

1. Lưu trữ ID của spawn setInterval và gọi clearInterval(id) khi phát hiện trò chơi kết thúc, hoặc nhiều phiên bản của khoảng thời gian sẽ chạy và ngày càng nhiều kẻ thù sẽ được tạo ra mỗi giây sau mỗi lần khởi động lại trò chơi.

Cụ thể,

Sau khi khởi động lại trò chơi, khoảng thời gian kẻ địch spawn vẫn được đặt trước, do đó, thực hiện lại khoảng thời gian đó sẽ thêm một kẻ địch bổ sung mỗi lần, số lượng kẻ địch mỗi khoảng thời gian sẽ tăng lên mỗi lần.

Các cách sửa lỗi có thể áp dụng cho vấn đề trên:

    a. Một cách đơn giản là thực hiện "spawnEnemies()" một lần và chỉ một lần, bên ngoài bất kỳ khối lặp lại nào.

    b. Một giải pháp khác là tính đến việc "window.setInterval()" trả về một Id mà chúng ta có thể lưu vào một biến ở trên cùng, chẳng hạn như:

        let spawnerId;

    Khi kết thúc trò chơi, bên trong trình lắng nghe sự kiện (addEventListener) của startGameBtn, ta sẽ xóa khoảng thời gian cũ này thông qua:

        window.clearInterval(spawnerId);

    Sau đó thêm khoảng thời gian mới.

    c. Sự khác biệt giữa requestAnimationFrame và setInterval:

    Nếu chuyển sang tab khác, trò chơi sẽ tạm dừng vì requestAnimationFrame chỉ hoạt động nếu tab đang hoạt động.

    setInterval sẽ hoạt động bất kể có mở tab hay không. Vì vậy, nó sẽ tiếp tục đẩy kẻ thù vào hàng ngũ kẻ thù mỗi giây sau đó.

    *Cách để có thể tránh điều này: Gọi Hàm animate() bằng requestAnimationFrame() nhanh nhất có thể.

    Tạo một biến toàn cục có tên là frames = 0.

    Trong animate() chỉ cần làm frames++ để đếm số khung hình.

    Trong spawnEnemies, bạn chỉ cần thực hiện một số phép toán đơn giản để biết thời điểm một giây trôi qua.

    Thông thường các trình duyệt chạy ở tốc độ 60FPS. vì vậy mỗi 60 khung hình = 1 giây.

        If (frames % 60 === 0) { spawnEnemies() }

2. Di chuyển cài đặt canvas.width và height cũng như trình phát x và y bên trong hàm init() để thích ứng với những thay đổi về kích thước cửa sổ trình duyệt khi khởi động lại trò chơi.


3. Sửa đổi một mảng trong quá trình lặp lại là một cách làm không tốt, mặc dù những gì đã làm với setTimeout trong bài hoàn toàn có thể hoạt động được.

Cách tiếp cận tốt hơn có thể là thực hiện array.slice().forEach().slice() tạo một bản sao của mảng ban đầu và điền vào đó các đối tượng ban đầu (ví dụ: đạn).

Điều này có nghĩa là khi loại bỏ một viên đạn (hoặc kẻ thù) bằng splice(), nó sẽ sửa đổi mảng ban đầu, chứ không phải bản sao mà game đang lặp lại.

Ngoài ra, chữ "p" còn tạo ra một sự khác biệt - slice() vs splice().


4. Nếu không muốn sử dụng bất kỳ thư viện bên ngoài nào, có thể truy cập trang web của tailwindcss và tìm kiếm lớp mà Chris sử dụng để xem lớp nào tương đương trong css đơn giản.

Ví dụ: "items-center" là "align-items: center"

Nếu ai đó muốn có hoạt ảnh thu nhỏ mà không cần nhập thư viện bên ngoài, có thể thực hiện như sau:

     a. Xác định thuộc tính "targetRadius" trong hàm tạo của kẻ địch

     b. Trong phương thức cập nhật của Enemy, kiểm tra xem targetRadius có lớn hơn bán kính hay không và nếu có thì bạn thu nhỏ nó bằng một giá trị không đổi (ví dụ: shrinkSpeed = 0.8) và chú ý rằng nếu substraction cho một bán kính nhỏ hơn targetRadius, đặt nó với bán kính:

     if (this.targetRadius < this.radius) {
      this.radius =
        this.radius - this.shrinkSpeed < this.targetRadius
          ? this.targetRadius
          : this.radius - this.shrinkSpeed;
     }

     c. Trong vòng lặp trò chơi, thay vì sử dụng thư viện, chỉ cần trừ giá trị cho enemy.targetRadius

5. Mã đã tạo có nhiều chức năng trùng lặp giữa các phần trò chơi dù rằng một lớp duy nhất có thể được tạo và từ đó tất cả các phần khác có thể mở rộng ra và chuyên biệt hóa.

Vd: class Player extends Graphics
class Projectile extends Graphics

Ngoài ra, việc thêm tính kế thừa và imports là để giảm số lượng mã trong tệp chính, nhưng việc này thường thêm một lớp phức tạp và trừu tượng mới khiến mọi thứ khó thay đổi hơn khi trò chơi ngày càng lớn hơn.

Cảnh báo trước với việc sử dụng tính kế thừa là để cố gắng tránh các lớp cơ sở mong manh - điều MÀ SẼ phá vỡ cơ sở mã nguồn. Nhưng nếu được sử dụng hợp lý và chính xác, nó sẽ giảm số lượng mã cần phải viết. 

Lý do tại sao không an toàn khi sử dụng for ... in để lặp mảng khi bạn phụ thuộc vào chỉ mục/thứ tự. Các chỉ mục được coi là các thuộc tính có thể đếm được và có thể được liệt kê với cùng một cơ chế được sử dụng cho các thuộc tính của đối tượng (không có kỳ vọng về thứ tự lặp lại).

6.  The conditional or question mark operator, represented by a ?, is one of the most powerful features in JavaScript. The ? operator is used in conditional statements, and when paired with a :, can function as a compact alternative to if...else statements.

E.g: Condition ? Ture : False

7.  $ – dollar identifier

            The dollar ($) sign is a JavaScript identifier, which simply means that it identifies an object in the same way that a name or variable does. Variables, functions, properties, events, and objects can be identified by the $ sign.

            Because of this, the $ symbol is not used in the same manner as other special symbols. Although JavaScript treats $ as an alphabetic character, that’s why it can be used as a variable name also in javascript.

$() – dollar function

    The dollar sign ($) is also used as a shortcut to the function document.getElementById(). The $ is being used as an alternative since this function references a DOM element if we pass an element’s id and now is used frequently in JavaScript to serve the purpose.

    It’s not mandatory to use the $ sign for this purpose. However, it has become a convention for frequent use.

    Now, even more, libraries offer their implementations of the $() function. Many now suggest in the javascript community the option to disable that definition to prevent conflicts.

    Although, using $ does not require using a library. All you have to do is swap document.getElementById() for $(). The purpose of getElementById() and add the following definition of the $() function to your code.

    However, in ECMAScript 6 (ES6) the $ may represent a Template Literal, just like we use just {} in python f-strings we use ${} in javascript to indicate a placeholder for variables.

Conclusion

    Conclusively, in JavaScript $ sign is used as an identifier, a function that replicates document.getElementById() and a string/template literal.

8.  The span HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. span is very much like a div element, but div is a block-level element whereas a span is an inline-level element.

9.  globalAlpha của API Canvas 2D chỉ định giá trị alpha (độ trong suốt) được áp dụng cho các hình dạng và hình ảnh trước khi chúng được vẽ lên canvas.

10. save() của Canvas 2D API lưu toàn bộ trạng thái của canvas bằng cách đẩy trạng thái hiện tại lên một ngăn xếp.

restore() của API Canvas 2D khôi phục trạng thái canvas được lưu gần đây nhất bằng cách bật mục nhập trên cùng trong ngăn xếp trạng thái bản vẽ. Nếu không có trạng thái đã lưu, phương pháp này không làm gì cả.

11. Loại dữ liệu CSS alpha-value đại diện cho một giá trị có thể là number hoặc percentage, chỉ định kênh alpha hoặc độ trong suốt của màu.
