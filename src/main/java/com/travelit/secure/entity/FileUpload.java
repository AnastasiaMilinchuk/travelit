package com.travelit.secure.entity;
import org.springframework.web.multipart.MultipartFile;

public class FileUpload{


    private MultipartFile file;

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        System.out.println("sdydyhd");
        this.file = file;

    }
}