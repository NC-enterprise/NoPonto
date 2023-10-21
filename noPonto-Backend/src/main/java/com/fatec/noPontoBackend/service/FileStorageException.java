package com.fatec.noPontoBackend.service;

public class FileStorageException extends RuntimeException{
    public FileStorageException(String message) {
        super(message);
    }

    public FileStorageException(String messagem, Throwable cause){
        super(messagem, cause);
    }

}
