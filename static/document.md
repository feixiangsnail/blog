1.首页
    banner、产品介绍、用户评价
2、技术
3、blog
4、联系
5、关于我们
//------
banner_table 焦点图标：
    ID、title（32）、discription (300)、href（300）
intro_table 产品介绍表：
    ID title(32) description(300)、href（300）、
custom_evalution_table 用户评价表
    ID、title(32)  description(200),src(300),
news_table 新闻表
    ID, title(32), summary(500),href(300),ico_src(300),
    big_pic_src(300),content(text),
blog_table 博文表
    ID,title(100),pic_src(300),pic_big_src(300),summary(500),
    content(text),post_Time(timestamp),author (32),n_view(int)
contact_table 地址表
    ID,street(50) ,phone(20) ,fax(20), email(32), weibo(40),
     wx(40), map
msg_table   发送信息
    ID,name(26),email(64),phone(20) subject(text)
aboutus_table 关于我们
    ID,title(200),content(text),pic_src(300),href(300)
admin_table 管理员用户表
    ID username(32) ,password(32)
//--------------------route
普通用户-前台部分
管理员用户-后台管理部分
route 小型express