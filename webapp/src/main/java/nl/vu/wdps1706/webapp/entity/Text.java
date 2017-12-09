package nl.vu.wdps1706.webapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

/**
 * @author lngtr
 * @since 2017-12-09
 */
@Entity(name = "text")
public class Text {

    @Id
    @Column(name = "id")
    private String id;

    @Lob
    @Column(name = "text", length = 5000)
    private byte[] text;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return new String(text);
    }

    public void setText(String text) {
        this.text = text.getBytes();
    }
}
