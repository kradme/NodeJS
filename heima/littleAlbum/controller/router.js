/**
 * Created by Lang on 2017/5/28.
 */
var file = require('../views/file');
//首页
exports.showIndex = function (req, res) {
    // res.render('index',{
    //     'albums' : file.getAllDir()
    // });

    file.getAllAlbums(function (err,allAlbums) {
        if(err){
            res.send(err);
            next();
            return;
        }
        res.render('index',{
            'albums' : allAlbums
        });
    });
}
//相册
exports.showAlbum = function (req, res, next) {
    //遍历相册中的所有图片
    var albumName = req.params.albumName;
    console.log(albumName);
    //具体操作交给model
    file.getAllImagesByAlbumName(albumName,function (err,imagesArray) {
        if(err){
            next();
            return;
        }
        res.render('album',{
            'albumname':albumName,
            'images' : imagesArray
        });
    });
}