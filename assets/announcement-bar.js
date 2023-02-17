if (document.querySelectorAll('.announcement-bar').length > 1) {
    let count = 0;
    setInterval(() => {
        count++;
        if (count >= document.querySelectorAll('.announcement-bar').length) {
            count = 0;
        }
        console.log(count);
        document.querySelectorAll('.announcement-bar').forEach((item, index) => {
            if (count == index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }, 3000);
}