Page({
    data:{
        title: '',
        author:'',
        content:''
    },
    onLoad: function() {
        this.getArticle()
    },
    onPullDownRefresh: function(){
        console.log(111)
          var _this = this
        wx.stopPullDownRefresh({
            success: function() {
                _this.getArticle() 
                wx.vibrateLong()
            }
        })     
    },
    getArticle: function() {
        var _this = this
        wx.request({
        url: 'https://interface.meiriyiwen.com/article/random?dev=1', //仅为示例，并非真实的接口地址
        data: {
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function(res) {
            console.log(res.data)
            _this.setData({
                title: res.data.data.title,
                author: res.data.data.author,
                content: res.data.data.content.replace(/<p>/g,'').replace(/<\/p>/g,'\n')
            })
        }
        })
    }

})