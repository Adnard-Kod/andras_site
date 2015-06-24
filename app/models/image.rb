class Image < ActiveRecord::Base
  belongs_to :project
  validates :project_id, presence: true
  has_attached_file :picture,
    styles: {large: '800x800>', thumb: '105x105>', listing: '225x225>', general: '640x480>', slider: '', tile: '' },
    :url  => "/images/:class/:style/:id",
    :path => ":rails_root/public/images/:class/:style/:id"
  validates_attachment :picture, presence: true
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
end
