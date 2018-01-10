//菜单选中

		 $(".menu-item-link").click(function()
			{
				alert(123);
				 $(".menu-item-link").removeClass("active");
				 $(this).addClass("active");
			});